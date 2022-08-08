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
challan_time text,
challan_location int,
image_proof text,
police_personel_id bigint,
vehicle_plate_number varchar(11),
violations text,
total_fine int,
due_date date,
paid_date date,
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
insert into Vehicle_Owner values("JH05BA6121","Amit","Singh","East Delhi",9976123013,"Amit@123");

delete from Vehicle_Owner where license_plate_number="JH05E6659";

select * from Vehicle_owner;

insert into challan values(0,'2022-07-25','18:35',620016,'https://static.autox.com/uploads/2014/12/hello-polis-bus-is-not-following-traffic-rules-cuttin-lane-over-speeding1-642x336.jpg',775231,'JH05CA6659','[speed limit violations, road safety violations]',1200,'2022-08-21',null,true,false,false,"");
insert into challan values(0,'2022-08-04','12:50',600022,'https://www.factchecker.in/wp-content/uploads/2019/09/Traffic-Violation_920.jpg',775232,'JH05AC7790',' road safety violations',1000,'2022-10-08',null,true,false,true,"Licence at home");
insert into challan values(0,'2022-06-20','20:10',600021,'https://www.factchecker.in/wp-content/uploads/2019/09/Traffic-Violation_920.jpg',775233,'JH05BA6121',' speed limit violations',500,'2022-08-11',null,true,false,false,"");
insert into challan values(0,'2022-07-29','15:55',650015,'https://static.autox.com/uploads/2014/12/hello-polis-bus-is-not-following-traffic-rules-cuttin-lane-over-speeding1-642x336.jpg',775232,'JH05CA6659','[speed limit violations, road safety violations]',1200,'2022-08-23',null,true,false,false,"");

select * from challan;

select challan_location, count(challan_location) from challan
group by challan_location;

desc challan;

-- select * from police_officer where personel_id= 775231 and challan_disputed = true;

drop database rto;