using SCMONLINE.Modules._Ext;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Reflection;
using System.Threading.Tasks;
using System.Web;

public static partial class Q
{
    public static Type GetRowTypeByFormKey(string formKey)
    {
        var formType = Assembly.GetExecutingAssembly().GetTypes()
            .First(w => w.GetCustomAttribute<FormScriptAttribute>()?.Key == formKey);

        if (formType == null)
            throw new Exception($"There is no form with FormKey = {formKey}");

        var rowType = formType?.GetCustomAttribute<BasedOnRowAttribute>()?.RowType;

        if (rowType == null)
            throw new Exception($"There is no BasedOnRowAttribute in the form with FormKey = {formKey}");

        return rowType;
    }

    public static string GetTableNameByRowType(Type rowType)
    {
        var tableNameAttr = rowType?.GetCustomAttribute<TableNameAttribute>();

        if (tableNameAttr == null)
            throw new Exception($"There is no TableNameAttribute at {rowType.Name}");

        return tableNameAttr.Name;
    }

    public static string GetConnectionKeyByRowType(Type rowType)
    {
        var ConnectionKeyAttr = rowType?.GetCustomAttribute<ConnectionKeyAttribute>();

        if (ConnectionKeyAttr == null)
            throw new Exception($"There is no ConnectionKeyAttribute at {rowType.Name}");

        return ConnectionKeyAttr.Value;
    }

    public static string GetNameById<TRow>(object id)
        where TRow : Row, IIdRow, INameRow, new()
    {

        using (var connection = SqlConnections.NewFor<TRow>())
            return connection.GetNameById<TRow>(id);
    }

    public static string GetIdByName<TRow>(string name)
        where TRow : Row, IIdRow, INameRow, new()
    {
        using (var connection = SqlConnections.NewFor<TRow>())
            return connection.GetNameById<TRow>(name);
    }

    public static List<string> GetNamesByIds<TRow>(IEnumerable<Int64> ids)
        where TRow : Row, IIdRow, INameRow, new()
    {

        using (var connection = SqlConnections.NewFor<TRow>())
            return connection.GetNamesByIds<TRow>(ids);
    }

    public static List<string> GetNamesByIds<TRow>(IEnumerable<Int32> ids)
        where TRow : Row, IIdRow, INameRow, new()
    {
        using (var connection = SqlConnections.NewFor<TRow>())
            return connection.GetNamesByIds<TRow>(ids);
    }

    public static TRow TryFirstByName<TRow>(string name)
        where TRow : Row, IIdRow, INameRow, new()
    {
        using (var connection = SqlConnections.NewFor<TRow>())
            return connection.TryFirstByName<TRow>(name);
    }

    public static UploadResponse UploadFile(HttpPostedFileBase file)
    {
        var processor = new UploadProcessor
        {
            ThumbWidth = 128,
            ThumbHeight = 96
        };

        if (processor.ProcessStream(file.InputStream, Path.GetExtension(file.FileName)))
        {
            var temporaryFile = "temporary/" + Path.GetFileName(processor.FilePath);
            using (var sw = new StreamWriter(Path.ChangeExtension(UploadHelper.DbFilePath(temporaryFile), ".orig")))
                sw.WriteLine(file.FileName);

            return new UploadResponse()
            {
                TemporaryFile = temporaryFile,
                Size = processor.FileSize,
                IsImage = processor.IsImage,
                Width = processor.ImageWidth,
                Height = processor.ImageHeight
            };
        }
        else
        {
            return new UploadResponse()
            {
                Error = new ServiceError()
                {
                    Code = "Exception",
                    Message = processor.ErrorMessage
                }
            };
        }

    }
}
