# Aggregation Pipeline m121

```
M121
├─ .git
├─ chapter1
│  ├─ validateLab1.js
│  └─ validateLab2.js
├─ chapter1.zip
├─ index.js
├─ node_modules
└─ readme.md

```
mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/aggregations?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl -u m121 -p aggregations --norc
**ens**

```
const pipeline1 = [
	{
		$match : {
			'imdb.rating' : {
				$gte : 7
			} ,
			genres : {
				$nin : [
					'Crime' , 'Horror'
				] } ,
			rated : {
				$in : [
					'PG' , 'G'
				] } ,
			languages : {
				$all : [
					'English' ,
					'Japanese'
				]
			}
		}
	} ,
	{
		$sort : {
			'imdb.rating' : -1
		}
	} ,
	{
		$project : {
			title         : 1 ,
			_id           : 0 ,
			'imdb.rating' : 1 ,
			genres        : 1 ,
			rated         : 1 ,
			languages     : 1
		}
	}
]

validateLab1(db.movies.aggregate( pipeline1 ))
```

```
const pipeline2 = [
	{
		$match : {
			'imdb.rating' : {
				$gte : 7
			} ,
			genres : {
				$nin : [
					'Crime' , 'Horror'
				] } ,
			rated : {
				$in : [
					'PG' , 'G'
				] } ,
			languages : {
				$all : [
					'English' ,
					'Japanese'
				]
			}
		}
	} ,
	{
		$project : {
			title : 1 ,
			_id   : 0 ,
			rated : 1 ,
		}
	}
]

db.movies.aggregate( pipeline2 )
```
