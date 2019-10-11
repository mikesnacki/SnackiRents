using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PropMan.Models
{
    public partial class snacki_rentsContext : DbContext
    {
        public snacki_rentsContext()
        {
        }

        public snacki_rentsContext(DbContextOptions<snacki_rentsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Properties> Properties { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=snacki_rents;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Properties>(entity =>
            {
                entity.HasKey(e=>e.PropId);

                entity.ToTable("properties");

                entity.Property(e => e.PropAddress)
                    .IsRequired()
                    .HasColumnName("propAddress")
                    .HasMaxLength(50);

                entity.Property(e => e.PropCatsAllowed)
                    .IsRequired()
                    .HasColumnName("propCatsAllowed")
                    .HasMaxLength(3)
                    .IsFixedLength();

                entity.Property(e => e.PropCity)
                    .IsRequired()
                    .HasColumnName("propCity")
                    .HasMaxLength(50);

                entity.Property(e => e.PropDogsAllowed)
                    .IsRequired()
                    .HasColumnName("propDogsAllowed")
                    .HasMaxLength(3)
                    .IsFixedLength();

                entity.Property(e => e.PropId).HasColumnName("prop_id");

                entity.Property(e => e.PropName)
                    .IsRequired()
                    .HasColumnName("propName")
                    .HasMaxLength(50);

                entity.Property(e => e.PropOneBedRoomUnits).HasColumnName("propOneBedRoomUnits");

                entity.Property(e => e.PropOneBedRoomUnitsRented).HasColumnName("propOneBedRoomUnitsRented");

                entity.Property(e => e.PropState)
                    .IsRequired()
                    .HasColumnName("propState")
                    .HasMaxLength(50);

                entity.Property(e => e.PropStudioUnits).HasColumnName("propStudioUnits");

                entity.Property(e => e.PropStudioUnitsRented).HasColumnName("propStudioUnitsRented");

                entity.Property(e => e.PropZip).HasColumnName("propZip");

                entity.Property(e => e.PropertyDescription)
                    .IsRequired()
                    .HasColumnName("propertyDescription");

                entity.Property(e => e.PropertyImage)
                    .IsRequired()
                    .HasColumnName("propertyImage");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
