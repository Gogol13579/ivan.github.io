from flask import *

app = Flask(__name__)


@app.route("/")
def main():
    return render_template('main.html')


@app.route("/result")
def result():
    return render_template('result.html')


if __name__ == '__main__':
    app.run(debug=True)
