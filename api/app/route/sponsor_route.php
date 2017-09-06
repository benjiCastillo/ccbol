<?php 
use App\Lib\Response;

	$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

$app->group('/sponsor',function(){

	$this->get('/listSponsor/',function($req, $res, $args){
		return $res->withHeader('Content-type', 'aplication/json')
				   ->write(
				   		json_encode($this->model->Sponsor->listSponsor())
				   		
				   	);
	});

	$this->post('/',function($req, $res, $args){

		return $res->withHeader('Content-type', 'aplication/json')
			       -> write(
						json_encode($this->model->Sponsor->insert($req->getParsedBody()))

				   	);
	});

	$this->put('/{id}',function($req, $res, $args){

		return $res->withHeader('Content-type', 'aplication/json')
				   ->write(
				   		json_encode($this->model->Sponsor->update($req->getParsedBody(), $args['id'] ))
				   		
				   	);
	});

	$this->delete('/{id}',function($req, $res, $args){
		return $res->withHeader('Content-type', 'aplication/json')
				   ->write(
				   		json_encode($this->model->Sponsor->delete($args['id']))
				   		
				   	);

	});
});	
// })->add(new AuthMiddleware($app)); //agregar middleware

 ?>