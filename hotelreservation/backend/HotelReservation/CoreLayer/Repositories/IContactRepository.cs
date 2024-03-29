﻿using CoreLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreLayer.Repositories
{
    public interface IContactRepository:IGenericRepository<Contact>
    {
        Task<List<Contact>> ContactUserList(string id);
    }
}
