
from flask import Blueprint,render_template

views=Blueprint('views',__name__)

@views.route('/')
def home():
    return render_template('home.html')
@views.route('/crime')
def crime():
    return render_template('index.html')

@views.route('/arrest')
def arrest():
    return render_template('index2.html')
@views.route('/story1')
def story1(): 
    return render_template('story1.html')

@views.route('/story2')
def story2(): 
    return render_template('story2.html')