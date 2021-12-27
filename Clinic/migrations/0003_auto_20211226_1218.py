# Generated by Django 3.2.9 on 2021-12-26 09:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Clinic', '0002_patient_pat_doctor'),
    ]

    operations = [
        migrations.CreateModel(
            name='Normallash',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('x1', models.FloatField(blank=True, null=True)),
                ('x2', models.FloatField(blank=True, null=True)),
                ('x3', models.FloatField(blank=True, null=True)),
                ('x4', models.FloatField(blank=True, null=True)),
                ('x5', models.FloatField(blank=True, null=True)),
                ('x6', models.FloatField(blank=True, null=True)),
                ('x7', models.FloatField(blank=True, null=True)),
                ('x8', models.FloatField(blank=True, null=True)),
                ('x9', models.FloatField(blank=True, null=True)),
                ('x10', models.FloatField(blank=True, null=True)),
                ('x11', models.FloatField(blank=True, null=True)),
                ('x12', models.FloatField(blank=True, null=True)),
                ('x13', models.FloatField(blank=True, null=True)),
                ('x14', models.FloatField(blank=True, null=True)),
                ('x15', models.FloatField(blank=True, null=True)),
                ('x16', models.FloatField(blank=True, null=True)),
                ('x17', models.FloatField(blank=True, null=True)),
                ('x18', models.FloatField(blank=True, null=True)),
                ('x19', models.FloatField(blank=True, null=True)),
                ('x20', models.FloatField(blank=True, null=True)),
                ('x21', models.FloatField(blank=True, null=True)),
                ('x22', models.FloatField(blank=True, null=True)),
                ('x23', models.FloatField(blank=True, null=True)),
                ('x24', models.FloatField(blank=True, null=True)),
                ('x25', models.FloatField(blank=True, null=True)),
                ('x26', models.FloatField(blank=True, null=True)),
                ('x27', models.FloatField(blank=True, null=True)),
                ('x28', models.FloatField(blank=True, null=True)),
                ('x29', models.FloatField(blank=True, null=True)),
                ('x30', models.FloatField(blank=True, null=True)),
                ('x31', models.FloatField(blank=True, null=True)),
                ('x32', models.FloatField(blank=True, null=True)),
                ('x33', models.FloatField(blank=True, null=True)),
                ('x34', models.FloatField(blank=True, null=True)),
                ('x35', models.FloatField(blank=True, null=True)),
                ('x36', models.FloatField(blank=True, null=True)),
                ('x37', models.FloatField(blank=True, null=True)),
                ('x38', models.FloatField(blank=True, null=True)),
                ('x39', models.FloatField(blank=True, null=True)),
                ('x40', models.FloatField(blank=True, null=True)),
                ('x41', models.FloatField(blank=True, null=True)),
                ('x42', models.FloatField(blank=True, null=True)),
                ('x43', models.FloatField(blank=True, null=True)),
                ('x44', models.FloatField(blank=True, null=True)),
                ('x45', models.FloatField(blank=True, null=True)),
                ('x46', models.FloatField(blank=True, null=True)),
                ('x47', models.FloatField(blank=True, null=True)),
                ('x48', models.FloatField(blank=True, null=True)),
                ('x49', models.FloatField(blank=True, null=True)),
                ('x50', models.FloatField(blank=True, null=True)),
                ('x51', models.FloatField(blank=True, null=True)),
                ('x52', models.FloatField(blank=True, null=True)),
                ('x53', models.FloatField(blank=True, null=True)),
                ('x54', models.FloatField(blank=True, null=True)),
                ('x55', models.FloatField(blank=True, null=True)),
                ('x56', models.FloatField(blank=True, null=True)),
                ('x57', models.FloatField(blank=True, null=True)),
                ('x58', models.FloatField(blank=True, null=True)),
                ('x59', models.FloatField(blank=True, null=True)),
                ('x60', models.FloatField(blank=True, null=True)),
                ('x61', models.FloatField(blank=True, null=True)),
                ('x62', models.FloatField(blank=True, null=True)),
                ('x63', models.FloatField(blank=True, null=True)),
                ('x64', models.FloatField(blank=True, null=True)),
                ('x65', models.FloatField(blank=True, null=True)),
                ('x66', models.FloatField(blank=True, null=True)),
                ('x67', models.FloatField(blank=True, null=True)),
                ('x68', models.FloatField(blank=True, null=True)),
                ('x69', models.FloatField(blank=True, null=True)),
                ('x70', models.FloatField(blank=True, null=True)),
                ('x71', models.FloatField(blank=True, null=True)),
                ('x72', models.FloatField(blank=True, null=True)),
                ('x73', models.FloatField(blank=True, null=True)),
                ('x74', models.FloatField(blank=True, null=True)),
                ('x75', models.FloatField(blank=True, null=True)),
                ('x76', models.FloatField(blank=True, null=True)),
                ('x77', models.FloatField(blank=True, null=True)),
                ('x78', models.FloatField(blank=True, null=True)),
                ('x79', models.FloatField(blank=True, null=True)),
                ('x80', models.FloatField(blank=True, null=True)),
                ('x81', models.FloatField(blank=True, null=True)),
                ('x82', models.FloatField(blank=True, null=True)),
                ('x83', models.FloatField(blank=True, null=True)),
                ('x84', models.FloatField(blank=True, null=True)),
                ('x85', models.FloatField(blank=True, null=True)),
                ('x86', models.FloatField(blank=True, null=True)),
                ('x87', models.FloatField(blank=True, null=True)),
                ('x88', models.FloatField(blank=True, null=True)),
                ('x89', models.FloatField(blank=True, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='patient_informs',
            name='calculus_status',
            field=models.BooleanField(blank=True, default=True, null=True),
        ),
        migrations.AddField(
            model_name='etalon',
            name='normallash',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Clinic.normallash'),
        ),
        migrations.AddField(
            model_name='patient',
            name='normallash',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Clinic.normallash'),
        ),
    ]