import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import KaryawanService from '../services/KaryawanService';

const ViewKaryawan = () => {
    let params=useParams();
    const [id, setId] = useState(params.id);
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState('');
    const [alamat, setAlamat] = useState('');
    const [jabatan, setJabatan] = useState('');
    const history = useNavigate();

    useEffect(() => {
        getId();
    }, []);

    const getId=async()=>{
            const res=await KaryawanService.getKaryawanById(id);
            let Karyawan = res.data.data;
            setNama(Karyawan[0].karyawan_nama);
            setUmur(Karyawan[0].karyawan_umur);
            setAlamat(Karyawan[0].karyawan_alamat);
            setJabatan(Karyawan[0].karyawan_jabatan);
        }

        function cancel() {
            history('/karyawan');
        }
    
        function getTitle() {
            return <h3 className="text-center">View Karyawan</h3>
        }
    

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {getTitle()}
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Nama Karyawan : {nama}</label>
                            </div>
                            <div className="form-group">
                                <label>Umur Karyawan : {umur}</label>
                            </div>
                            <div className="form-group">
                                <label>Alamat Karyawan : {alamat}</label>
                            </div>
                            <div className="form-group">
                                <label>Jabatan Karyawan : {jabatan}</label>
                            </div>
                            <br></br>
                            <button className="btn btn-danger" onClick={cancel}>Batal</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>  )
}

export default ViewKaryawan
