using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PropMan.Models
{
    public class PropertyDataAccessLayer
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
        public Properties GetPropertyData(int id)
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

        public List<Properties> GetProperties()  
        {  
            List<Properties> lstProperties = new List<Properties>();  
            lstProperties = (from ProptertiesList in db.Properties select ProptertiesList).ToList();  
            return lstProperties;  
        } 
    }
}
