using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace _Ext //enums must have namespace otherwise it transforms to wrong typescript code
{

    [EnumKey("Months"), ScriptInclude]
    public enum Months
    {
        January = 0,
        February = 1,
        March = 2,
        April = 3,
        May = 4,
        June = 5,
        July = 6,
        August = 7,
        September = 8,
        October = 9,
        November = 10,
        December = 11,
    }

    [EnumKey("TimeUoM"), ScriptInclude]
    public enum TimeUoM
    {

        Hour = 1,
        Day = 2,
        Week = 3,
        Month = 4,
        CalenderMonth = 5,
        Year = 6,
    }
    [EnumKey("AdaTidakAda"), ScriptInclude]
    public enum AdaTidakAda
    {
        [Description("Tidak Ada")]
        TidakAda = 0,
        [Description("Ada")]
        Ada = 1
    }
    [EnumKey("UndangTidakUndang"), ScriptInclude]
    public enum UndangTidakUndang
    {
        [Description("Tidak Diundang")]
        TidakUndang = 0,
        [Description("Diundang")]
        Undang = 1
    }
    [EnumKey("ApproveTidakApprove"), ScriptInclude]
    public enum ApproveTidakApprove
    {
        [Description("Tidak Di Approve")]
        TidakApprove = 0,
        [Description("Di Approve")]
        Approve = 1
    }
    [EnumKey("YaTidak"), ScriptInclude]
    public enum YaTidak
    {
        [Description("Tidak")]
        Tidak = 0,
        [Description("Ya")]
        Ya = 1
    }
    [EnumKey("LelangGagalLelang"), ScriptInclude]
    public enum LelangGagalLelang
    {
        [Description("Gagal Lelang")]
        GagalLelang = 0,
        [Description("Melanjutkan Lelang")]
        Lelang = 1
    }
}