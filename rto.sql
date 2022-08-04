create database rto;

use rto;

create table Police_Officer(
personel_id bigint primary key auto_increment,
first_name text,
last_name text,
password text
);

alter table Police_Officer auto_increment=775231;

create table Vehicle_Owner(
vehicle_plate_number varchar(11) primary key,
first_name text,
last_name text,
address text,
phone_number bigint,
password text
);

create table Challan(
id bigint primary key auto_increment,
challan_date date,
challan_time time,
challan_location int,
image_proof text,
police_personel_id bigint,
vehicle_plate_number varchar(11),
violations text,
total_fine int,
due_date date,
is_due_date_valid boolean,
is_challan_closed boolean,
is_challan_disputed boolean,
dispute_message text,
foreign key (police_personel_id) references Police_Officer(personel_id),
foreign key (vehicle_plate_number) references Vehicle_Owner(vehicle_plate_number)
);

insert into Police_Officer values(0,"Ramesh","Singh","Ramesh@123");
insert into Police_Officer values(0,"Pankaj","Tiwari","Pankaj@123");
insert into Police_Officer values(0,"Kamal","Hasan", "Kamal@123");

select * from Police_officer;

insert into Vehicle_Owner values("JH05CA6659","Ankur","Rai","Janakpuri",9931319884,"Ankur@123");
insert into Vehicle_Owner values("JH05E4159","Binod","Rai","Dwarka",9534210425,"Binod@123");
insert into Vehicle_Owner values("JH05AC7790","Ram","Sharma","Karol Bagh",6250998712,"Ram@123");

delete from Vehicle_Owner where license_plate_number="JH05E6659";

select * from Vehicle_owner;

insert into challan values(0,'2012-03-25','18:35:22',450016,'bang.jpg',775231,'JH05CA6659','[speed limit violations, road safety violations]',1200,false,false,"");
insert into challan values(0,'2020-07-10','12:50:09',600021,'noHelmet.jpg',775233,'JH05AC7790',' road safety violations',1000,true,false,"");

select * from challan;

desc police_officer;

-- select * from police_officer where personel_id= 775231 and challan_disputed = true;

drop database rto;