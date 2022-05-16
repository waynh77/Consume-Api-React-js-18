import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import KaryawanService from '../services/KaryawanService';

const CreateKaryawan = () => {
    let params=useParams();
    const [id, setId] = useState(params.id);
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState('');
    const [alamat, setAlamat] = useState('');
    const [jabatan, setJabatan] = useState('');
    const history = useNavigate();
    
    useEffect(() => {
        cekId();
    }, []);

    const cekId=async()=>{
        console.log(id);
        if (id === '_add') {
            return
        } else {
            const res=await KaryawanService.getKaryawanById(id);
            let Karyawan = res.data.data;
            setNama(Karyawan[0].karyawan_nama);
            setUmur(Karyawan[0].karyawan_umur);
            setAlamat(Karyawan[0].karyawan_alamat);
            setJabatan(Karyawan[0].karyawan_jabatan);
        }

    }

    function saveOrUpdateKaryawan(e) {
        e.preventDefault();
        let Karyawan = {
            nama: nama,
            umur: umur,
            alamat: alamat,
            jabatan: jabatan
        }
        console.log('Karyawan => ' + JSON.stringify(Karyawan));

        if (id === '_add') {
            KaryawanService.createKaryawan(Karyawan).then(res=>{
                history('/karyawan');
            });

        } else {
            KaryawanService.updateKaryawan(Karyawan, id).then(res=>{
                history('/karyawan');
            });
        }
    }

    function cancel() {
        history('/karyawan');
    }

    function getTitle() {
        if (id === "_add") {
            return <h3 className="text-center">Add Karyawan</h3>
        } else {
            return <h3 className="text-center">Update Karyawan</h3>
        }
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
                                    <label>Nama Karyawan</label>
                                    <input placeholder="Nama Karyawan" name="nama" className="form-control"
                                        value={nama} onChange={(e)=>setNama(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Umur Karyawan</label>
                                    <input placeholder="Umur Karyawan" name="umur" className="form-control"
                                        value={umur} onChange={(e)=>setUmur(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Alamat Karyawan</label>
                                    <input placeholder="Alamat Karyawan" name="alamat" className="form-control"
                                        value={alamat} onChange={(e)=>setAlamat(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Jabatan Karyawan</label>
                                    <input placeholder="Jabatan Karyawan" name="jabatan" className="form-control"
                                        value={jabatan} onChange={(e)=>setJabatan(e.target.value)} />
                                </div>
                                <br></br>
                                <button className="btn btn-success" onClick={saveOrUpdateKaryawan} >Simpan</button>
                                <button className="btn btn-danger" onClick={cancel}>Batal</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>    )
}

export default CreateKaryawan
