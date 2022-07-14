using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime DOB){
            var today = DateTime.Now;
            var age = today.Year - DOB.Year;
            if ( DOB.Date > today.AddYears(-age)) age --;
            return age;
        }
    }
}