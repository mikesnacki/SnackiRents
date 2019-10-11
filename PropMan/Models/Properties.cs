using System;
using System.Collections.Generic;

namespace PropMan.Models
{
    public partial class Properties
    {
        public Guid PropId { get; set; }
        public string PropName { get; set; }
        public string PropAddress { get; set; }
        public string PropCity { get; set; }
        public string PropState { get; set; }
        public int PropZip { get; set; }
        public int PropStudioUnitsRented { get; set; }
        public int PropStudioUnits { get; set; }
        public int PropOneBedRoomUnitsRented { get; set; }
        public int PropOneBedRoomUnits { get; set; }
        public string PropCatsAllowed { get; set; }
        public string PropDogsAllowed { get; set; }
        public string PropertyDescription { get; set; }
        public string PropertyImage { get; set; }
    }
}
