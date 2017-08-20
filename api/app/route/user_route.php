<?php 
use App\Lib\Response;

	$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

$app->group('/user',function(){

	$this->post('/login',function($req, $res, $args){
		return $res->withHeader('Content-type', 'aplication/json')
				   ->write(
				   		json_encode($this->model->User->login($req->getParsedBody()))
				   	);
	});

	$this->get('/listStudents/',function($req, $res, $args){
		return $res->withHeader('Content-type', 'aplication/json')
				   ->write(
				   		json_encode($this->model->User->listStudents())
				   		
				   	);
	});

	$this->get('/listProfessionals/',function($req, $res, $args){
		return $res->withHeader('Content-type', 'aplication/json')
				   ->write(
				   		json_encode($this->model->User->listProfessionals())
				   		
				   	);
	});

	
	$this->get('/userPaidBc/{id}',function($req, $res, $args){
		return $res->withHeader('Content-type', 'aplication/json')
				   ->write(
				   		json_encode($this->model->User->userPaidBc($args['id']))
				   		
				   	);
	});

	// $this->get('/userPaidCi/{id}',function($req, $res, $args){
	// 	return $res->withHeader('Content-type', 'aplication/json')
	// 			   ->write(
	// 			   		json_encode($this->model->User->userPaidCi($args['id']))
				   		
	// 			   	);
	// });

	$this->post('/userPaidCi/',function($req, $res, $args){
		
				return $res->withHeader('Content-type', 'aplication/json')
						   -> write(
								json_encode($this->model->User->userPaidCi($req->getParsedBody()))
		
							   );
			});

	$this->get('/listUserBc/{id}',function($req, $res, $args){
		return $res->withHeader('Content-type', 'aplication/json')
				   ->write(
				   		json_encode($this->model->User->listUserBc($args['id']))
				   		
				   	);
	});

	// $this->get('/listUserCi/{id}',function($req, $res, $args){
	// 	return $res->withHeader('Content-type', 'aplication/json')
	// 			   ->write(
	// 			   		json_encode($this->model->User->listUserCi($args['id']))
				   		
	// 			   	);
	// });

	$this->post('/listUserCi/',function($req, $res, $args){
		
				return $res->withHeader('Content-type', 'aplication/json')
						   -> write(
								json_encode($this->model->User->listUserCi($req->getParsedBody()))
		
							   );
			});

	$this->post('/',function($req, $res, $args){

		return $res->withHeader('Content-type', 'aplication/json')
			       -> write(
						json_encode($this->model->User->insert($req->getParsedBody()))

				   	);
	});

	$this->post('/insertStudent/',function($req, $res, $args){

		return $res->withHeader('Content-type', 'aplication/json')
			       -> write(
						json_encode($this->model->User->insertStudent($req->getParsedBody()))

				   	);
	});

	$this->get('/countUser/',function($req, $res, $args){

		return $res->withHeader('Content-type', 'aplication/json')
			       -> write(
						json_encode($this->model->User->countUser())

				   	);
	});
	$this->post('/insertProfessional/',function($req, $res, $args){

		return $res->withHeader('Content-type', 'aplication/json')
			       -> write(
						json_encode($this->model->User->insertProfessional($req->getParsedBody()))

				   	);
	});
	$this->post('/datauser/',function($req, $res, $args){

<<<<<<< HEAD
	$this->post('/updateUser/',function($req, $res, $args){
		
				return $res->withHeader('Content-type', 'aplication/json')
						   -> write(
								json_encode($this->model->User->updateUser($req->getParsedBody()))
		
							   );
			});

=======
		return $res->withHeader('Content-type', 'aplication/json')
			       -> write(
						json_encode($this->model->User->dataUser($req->getParsedBody()))

				   	);
	});
>>>>>>> 7c2e7d0223c07ae1eaf4c6bb23035931b03df668
	$this->put('/{id}',function($req, $res, $args){

		return $res->withHeader('Content-type', 'aplication/json')
				   ->write(
				   		json_encode($this->model->User->update($req->getParsedBody(), $args['id'] ))
				   		
				   	);
	});

	$this->delete('/{id}',function($req, $res, $args){
		return $res->withHeader('Content-type', 'aplication/json')
				   ->write(
				   		json_encode($this->model->User->delete($args['id']))
				   		
				   	);

	});
});	
// })->add(new AuthMiddleware($app)); //agregar middleware

 ?>