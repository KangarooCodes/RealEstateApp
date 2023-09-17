DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;

CREATE TABLE users (
    username text PRIMARY KEY,
    password text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    mobile text,
	email text NOT NULL,
	bio text,
	coverage int,
	address_id int,
	favorites boolean,
    join_at timestamp without time zone NOT NULL,
    last_login_at timestamp with time zone
);

