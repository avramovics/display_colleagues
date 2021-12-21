var chai = require('chai')
var expect = chai.expect
var request = require('supertest')
var app = require('../../server.js')

describe('POST /login', function() {
  it('it responds with 401 status code if bad username or password', function(
    done
  ) {
    request(app)
      .post('/login')
      .type('json')
      .send('{"username":"bad","password":"wrong"}')
      .expect(401)
      .end(function(err, res) {
        if (err) return done(err)
        done()
      })
  })

  it('it responds with 200 status code if good username or password', function(
    done
  ) {
    request(app)
      .post('/login')
      .type('json')
      .send('{"username":"admin","password":"admin"}')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err)
        done()
      })
  })

  it('it returns JWT token if good username or password', function(done) {
    request(app)
      .post('/login')
      .type('json')
      .send('{"username":"admin","password":"admin"}')
      .end(function(err, res) {
        if (err) return done(err)
        expect(res.body).have.property('jwt')
        done()
      })
  })


  let JWT_TOKEN
  beforeEach(function(done) {
    request(app)
    .post('/login')
    .type('json')
    .send('{"username":"admin","password":"admin"}')
    .end(function(err, res) {
      if (err) return done(err)
      expect(res.body).have.property('jwt')  
      JWT_TOKEN = res.body.jwt
      done();
  });
});

  it('it returns array of data using JWT', function(done) {
    let JWT_TOKEN_OBJECT  = 'Bearer '.concat( JWT_TOKEN ) 
    request(app)
      .get('/api/users-data')
      .set('authorization', JWT_TOKEN_OBJECT)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err)
      expect(res.body).to.be.a('array')
      done()
    });
  });
  
})



