	create table ticket (
		id serial primary key,
		user_id integer not null references user(id) on delete cascade,
		place_id varchar(128) not null references place(id) on delete cascade,
		date date not null,
		time time not null,
		status varchar(32) not null
	);



