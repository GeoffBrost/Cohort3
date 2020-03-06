from flask import Flask, render_template
app = Flask(__name__, template_folder=
'build', static_folder= 'build/static')

cities = [
    {'Name':'Calgary', 'Population':4000, 'Longitude':0, 'Latitude':20, 'Counter':0}
]

counter =0

@app.route('/hello')
def hello():
    return 'hello world'

@app.route('/react')
def react():
    return render_template('index.html')

@app.route('/api/all')
def api_all():
    return {'Cities': cities }

@app.route('/api/add/<string:name>/<int:population>/<int:longitude>/<int:latitude>')

def api_add(name,population,longitude,latitude):
    global cities, counter
    counter = counter + 1
    new_city = {'Name':name, 'Population':population, 'Longitude':longitude,'Latitude':latiude,
    'Counter':counter}
    cities.append( new_city )
    return new_city

@app.route('/api/delete/<int:counter>')
def api_delete(counter):
    global cities
    for i in range(0, len(cities) ):
        if counter == cities[i]['Counter']:
            delete_city = cities[i]
            del cities[i]
            break

    return deleted_city

@app.route('/api/movein/<int:counter>/<int:how_many>')
def api_movein(counter, how_many):
   global cities
   for i in range (0, len(cities) ):
      if counter == cities[i]['Counter']:
         cities[i]['Population'] = cities[i]['Population'] + how_many
         modified_city = cities[i]         
         break

   return modified_city



@app.route('/api/moveout/<int:counter>/<int:how_many>')
def api_moveout(counter, how_many):
    global cities
    for i in range(0, len(cities) ):
        if counter == cities[i]['Counter']:
            cities[i]['Population'] = cities[i]['Population'] - how_many 
            modified_city = cities[i]
            break

    return modified_city


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug = True)