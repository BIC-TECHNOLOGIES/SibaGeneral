﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SibaDev.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class procCntx : DbContext
    {
        public procCntx()
            : base("name=procCntx")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
    
        public virtual int SEQ_CREATOR3(string sEQ_NAME, Nullable<decimal> sTART_NUM, Nullable<decimal> mIN_NUM, Nullable<decimal> mAX_NUM, Nullable<decimal> cACHE_NUM, Nullable<decimal> iNCREMENT_NUM)
        {
            var sEQ_NAMEParameter = sEQ_NAME != null ?
                new ObjectParameter("SEQ_NAME", sEQ_NAME) :
                new ObjectParameter("SEQ_NAME", typeof(string));
    
            var sTART_NUMParameter = sTART_NUM.HasValue ?
                new ObjectParameter("START_NUM", sTART_NUM) :
                new ObjectParameter("START_NUM", typeof(decimal));
    
            var mIN_NUMParameter = mIN_NUM.HasValue ?
                new ObjectParameter("MIN_NUM", mIN_NUM) :
                new ObjectParameter("MIN_NUM", typeof(decimal));
    
            var mAX_NUMParameter = mAX_NUM.HasValue ?
                new ObjectParameter("MAX_NUM", mAX_NUM) :
                new ObjectParameter("MAX_NUM", typeof(decimal));
    
            var cACHE_NUMParameter = cACHE_NUM.HasValue ?
                new ObjectParameter("CACHE_NUM", cACHE_NUM) :
                new ObjectParameter("CACHE_NUM", typeof(decimal));
    
            var iNCREMENT_NUMParameter = iNCREMENT_NUM.HasValue ?
                new ObjectParameter("INCREMENT_NUM", iNCREMENT_NUM) :
                new ObjectParameter("INCREMENT_NUM", typeof(decimal));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SEQ_CREATOR3", sEQ_NAMEParameter, sTART_NUMParameter, mIN_NUMParameter, mAX_NUMParameter, cACHE_NUMParameter, iNCREMENT_NUMParameter);
        }
    
        public virtual int SEQ_CREATOR4(string sEQ_NAME, Nullable<decimal> sTART_NUM, Nullable<decimal> mIN_NUM, Nullable<decimal> mAX_NUM, Nullable<decimal> cACHE_NUM, Nullable<decimal> iNCREMENT_NUM)
        {
            var sEQ_NAMEParameter = sEQ_NAME != null ?
                new ObjectParameter("SEQ_NAME", sEQ_NAME) :
                new ObjectParameter("SEQ_NAME", typeof(string));
    
            var sTART_NUMParameter = sTART_NUM.HasValue ?
                new ObjectParameter("START_NUM", sTART_NUM) :
                new ObjectParameter("START_NUM", typeof(decimal));
    
            var mIN_NUMParameter = mIN_NUM.HasValue ?
                new ObjectParameter("MIN_NUM", mIN_NUM) :
                new ObjectParameter("MIN_NUM", typeof(decimal));
    
            var mAX_NUMParameter = mAX_NUM.HasValue ?
                new ObjectParameter("MAX_NUM", mAX_NUM) :
                new ObjectParameter("MAX_NUM", typeof(decimal));
    
            var cACHE_NUMParameter = cACHE_NUM.HasValue ?
                new ObjectParameter("CACHE_NUM", cACHE_NUM) :
                new ObjectParameter("CACHE_NUM", typeof(decimal));
    
            var iNCREMENT_NUMParameter = iNCREMENT_NUM.HasValue ?
                new ObjectParameter("INCREMENT_NUM", iNCREMENT_NUM) :
                new ObjectParameter("INCREMENT_NUM", typeof(decimal));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("SEQ_CREATOR4", sEQ_NAMEParameter, sTART_NUMParameter, mIN_NUMParameter, mAX_NUMParameter, cACHE_NUMParameter, iNCREMENT_NUMParameter);
        }
    }
}
