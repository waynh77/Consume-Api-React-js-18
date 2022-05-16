import React, { useEffect, useState } from 'react';
import KaryawanService from '../services/KaryawanService';
import { useNavigate } from 'react-router-dom';

const ListKaryawan = () => {
    const [karyawans, setKaryawans] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        getKaryawan();
    }, []);

    const getKaryawan = async () => {
        const response = await KaryawanService.getKaryawan();
        setKaryawans(response.data.data);
    }

    function addKaryawan(){
        history('/add-Karyawan/_add');
    }

    function editKaryawan (id)  {
        history(`/add-Karyawan/${id}`);
    }

    function deleteKaryawan (id) {
        let data = {
            id: id
        }
        KaryawanService.deleteKaryawan(data);
        const karyawanBaru = karyawans.filter(Karyawan => Karyawan.karyawan_id !== id);
        setKaryawans(karyawanBaru);
    };


    function viewKaryawan (id)  {
        history(`/view-Karyawan/${id}`);
    }


    return (
        <div>
            <h2 className="text-center">Master Karyawan</h2>
            <button className="btn btn-primary" onClick={addKaryawan}>Add Karyawan</button>
            <br></br>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Umur</th>
                            <th>Alamat</th>
                            <th>Jabatan</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            karyawans.map(
                                karyawan =>
                                    <tr key={karyawan.karyawan_id}>
                                        <td>{karyawan.karyawan_nama}</td>
                                        <td>{karyawan.karyawan_umur}</td>
                                        <td>{karyawan.karyawan_alamat}</td>
                                        <td>{karyawan.karyawan_jabatan}</td>
                                        <td>
                                            <button onClick={()=>editKaryawan(karyawan.karyawan_id)}
                                                className='btn btn-info'>Edit</button>
                                            <button style={{ marginleft: "10px" }}
                                                onClick={()=>deleteKaryawan(karyawan.karyawan_id)}
                                                className='btn btn-danger'>Delete</button>
                                            <button style={{ marginleft: "10px" }} onClick={()=>viewKaryawan(karyawan.karyawan_id)}
                                                className='btn btn-secondary'>View</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>)
}

export default ListKaryawan
