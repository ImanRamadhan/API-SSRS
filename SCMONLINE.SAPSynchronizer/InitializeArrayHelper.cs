using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SCMONLINE.SAPSynchronizer
{
    public static class InitializeArrayHelper
    {
        /*Source: https://stackoverflow.com/questions/3301678/how-to-declare-an-array-of-objects-in-c-sharp */
        public static T[] InitializeArray<T>(int length) where T : new()
        {
            T[] array = new T[length];
            for (int i = 0; i < length; ++i)
            {
                array[i] = new T();
            }

            return array;
        }
    }
}