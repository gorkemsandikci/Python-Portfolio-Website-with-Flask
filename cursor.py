from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def ana_sayfa():
    return render_template('index.html')

# ... diğer rotalar ...

if __name__ == '__main__':
    app.run(debug=True, port=5001)