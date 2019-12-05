using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace USAEMS.Core.Models
{
    public class Event
    {
        public Event()
        {

        }
        //All Events should have an Id, Name, and DateTime
        public int id { get; set; }
        [Required]
        public string eventName { get; set; }
        [Required]
        public string eventType { get; set; }
        [Required]
        public string eventDateTime { get; set; }
        public string eventDescription { get; set; }

        //Events will have collections of Incidents and AppUsers (Workers) associated with them
        public ICollection<Incident> Incidents { get; set; }
        public ICollection<AppUser> Workers { get; set; }
    }
}