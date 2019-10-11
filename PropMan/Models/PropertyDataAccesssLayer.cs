using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PropMan.Models
{
    public class PropertyDataAccesssLayer
    {
        snacki_rentsContext db = new snacki_rentsContext();
        public IEnumerable<Properties> GetAllProperties()
        {
            try
            {
                return db.Properties.ToList();
            }
            catch
            {
                throw;
            }
        }   
        public int AddProperty(Properties property)
        {
            try
            {
                db.Properties.Add(property);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        } 
        public int UpdateProperty(Properties property)
        {
            try
            {
                db.Entry(property).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }  
        public Properties GetEmployeeData(int id)
        {
            try
            {
                Properties prop = db.Properties.Find(id);
                return prop;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particular employee    
        public int DeleteProperty(int id)
        {
            try
            {
                Properties prop = db.Properties.Find(id);
                db.Properties.Remove(prop);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
