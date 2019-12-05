using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using USAEMS.Core.Models;

namespace USAEMS.ApiModels
{
    public class EventModel
    {
        public int id { get; set; }
        public string eventName { get; set; }
        public string eventType { get; set; }
        public string eventDateTime { get; set; }
        public string eventDescription { get; set; }
    }
}