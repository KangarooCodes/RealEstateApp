DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;

CREATE TABLE users (
    user text PRIMARY KEY,
    pw text NOT NULL,
    f_name text NOT NULL,
    l_name text NOT NULL,
    mobile text,
	email text NOT NULL,
	bio text,
	address_id int,
	favorites boolean,
    join_at timestamp without time zone NOT NULL,
    last_login_at timestamp with time zone
);

CREATE TABLE favorites (
    address_id SERIAL PRIMARY KEY
)

CREATE TABLE properties (
    id SERIAL PRIMARY KEY,
    city text NOT NULL,
    street text NOT NULL,
    zipcode int NOT NULL,
    price int NOT NULL,
    prop_type text,
    beds int,
    baths int,
    sqft int,
    agent_email text,
    photo nvarchar,
    state_code text
)

