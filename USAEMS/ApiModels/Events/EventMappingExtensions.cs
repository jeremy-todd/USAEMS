using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using USAEMS.Core.Models;

namespace USAEMS.ApiModels
{
    public static class EventMappingExtensions
    {
        public static EventModel ToApiModel(this Event thisEvent)
        {
            return new EventModel
            {
                id = thisEvent.id,
                eventName = thisEvent.eventName,
                eventType = thisEvent.eventType,
                eventDateTime = thisEvent.eventDateTime,
                eventDescription = thisEvent.eventDescription
            };
        }

        public static Event ToDomainModel(this EventModel eventModel)
        {
            return new Event
            {
                id = eventModel.id,
                eventName = eventModel.eventName,
                eventType = eventModel.eventType,
                eventDateTime = eventModel.eventDateTime,
                eventDescription = eventModel.eventDescription
            };
        }

        public static IEnumerable<EventModel> ToApiModels(this IEnumerable<Event> events)
        {
            return events.Select(e => e.ToApiModel());
        }

        public static IEnumerable<Event> ToDomainModels(this IEnumerable<EventModel> eventModels)
        {
            return eventModels.Select(eM => eM.ToDomainModel());
        }
    }
}