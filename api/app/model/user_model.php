<?php 

namespace App\Model;

use App\Lib\Response,
	App\Lib\Security;

/**
* Modelo usuario
*/
class  UserModel
{
	private $db;
	private $table = 'user';
	private $response;



	public function __CONSTRUCT($mysqli){
		$this->mysqli   = $mysqli;
		$this->response = new Response();
		$this->security = new Security();
	}

	//var $l => 'limit', $p => 'pagina'

	//lista_total
	public function listar(){

		return $data = $this->db->from($this->table)
						 ->orderBy('id DESC')
						 ->fetchAll();
	//  return $data = $this->mysqli->query('select * from '.$this->table)
	//					 			->fetchAll();				   						 
	}

	//listar paginado
	//parametros de limite, pagina
	public function paginated($l, $p){	
		$p = $p*$l;
		$data = $this->db->from($this->table)
						 ->limit($l)
						 ->offset($p)
						 ->orderBy('id desc')
						 ->fetchAll();

		$total = $this->db->from($this->table)
						  ->select('COUNT(*) Total')
						  ->fetch()
						  ->Total;

		return [
			'data'	=>   $data,
			'total' =>   $total

		];				  						 
	}
	//obtener
	public function getExamen($id){

		return $data = $this->db->from($this->table, $id)
								->fetch();  						 
	}
	//registrar
	public function insert($data){
		// $data['password'] = md5($data['password']);

		$this->mysqli->insertInto($this->table, $data)
				 ->execute();

		return $this->response->setResponse(true);
		}

	/* INSERTAR Usuario */
	public function insertStudent($data){
		$this->mysqli->multi_query("CALL insertStudent('".$data['_name']."',
													'".$data['_last_name']."',
													'".$data['_birthdate']."',
													'".$data['_email']."',
													'".$data['_city']."',
													'".$data['_cellphone']."',
													'".$data['_college']."',
													'".$data['_career']."')");
			$res = $this->mysqli->store_result();
			$res = $res->fetch_array();
			mysqli_close($this->mysqli);
			$res = array("message"=>$res[0],"response"=>true);
			return $res;	
	}

	public function insertProfessional($data){
		$this->mysqli->multi_query("CALL insertProfessional('".$data['_name']."',
													'".$data['_last_name']."',
													'".$data['_birthdate']."',
													'".$data['_email']."',
													'".$data['_city']."',
													'".$data['_cellphone']."',
													'".$data['_professional_degree']."')");
			$res = $this->mysqli->store_result();
			$res = $res->fetch_array();
			mysqli_close($this->mysqli);
			$res = array("message"=>$res[0],"response"=>true);
			return $res;	
	}

	//actualizar
	public function update($data, $id){

		$this->db->update($this->table, $data, $id)	
				 ->execute();

		return $this->response->setResponse(true);		 
	}
	//eliminar
	public function delete($id){

		$this->db->deleteFrom($this->table, $id)	
				 ->execute();

		return $this->response->setResponse(true);		 
	}


}


 ?>