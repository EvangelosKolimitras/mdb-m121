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
validateLab1( db.movies.aggregate( pipeline1 ) )
validateLab2( db.movies.aggregate( pipeline2 ) )
