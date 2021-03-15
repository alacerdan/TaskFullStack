### Backend

#### Resources

> `GET /` -> Get message"API Clever Advertising" 
> `GET /property` -> Get all ads. Return array of ads
> `GET /property/id` -> Get ads by id. Return one ads

 **Tech informations:**
- PORT: 5000


 ### Test 

 Used jest.js

- To test Backend app:

```bash
$ docker-compose up
$ docker-compose exec backend sh -c "npm test"
```

![](figures/test_backend.png)

 