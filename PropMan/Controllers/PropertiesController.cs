using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PropMan.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PropMan.Controllers
{
    public class PropertiesController : Controller
    {
         PropertyDataAccessLayer objProperty = new PropertyDataAccessLayer();  
       
        [HttpGet]  
        [Route("api/Property/Index")]  
        public IEnumerable<Properties> Index()  
        {  
            return objProperty.GetAllProperties();  
        }  
        [HttpPost]  
        [Route("api/Property/Create")]  
        public int Create(Properties property)  
        {  
            return objProperty.AddProperty(property);  
        }  
        [HttpGet]  
        [Route("api/Property/Details/{id}")]  
        public Properties Details(int id)  
        {  
            return objProperty.GetPropertyData(id);  
        }  
        [HttpPut]  
        [Route("api/Property/Edit")]  
        public int Edit(Properties property)  
        {  
            return objProperty.UpdateProperty(property);  
        }  
        [HttpDelete]  
        [Route("api/Property/Delete/{id}")]  
        public int Delete(int id)  
        {  
            return objProperty.DeleteProperty(id);  
        }  
        [HttpGet]  
        [Route("api/Property/GetPropertiesList")]  
        public IEnumerable<Properties> Details()  
        {  
            return objProperty.GetProperties();  
        } 
    }
}
