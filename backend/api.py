import time
from flask import Flask;

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}

# @app.route("/")
# def index():
#     return send_from_directory("react_app/build", "index.html")

if __name__ == "__main__":
    app.run(debug=True) 