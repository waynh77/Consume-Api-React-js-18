import axios from 'axios';

const Karyawan_Api_Base_url = "http://localhost:4000/karyawan";

class KaryawanService {

    getKaryawan() {
        return axios.get(Karyawan_Api_Base_url);
    }

    getKaryawanById(karyawanId) {
        return axios.get(Karyawan_Api_Base_url + '/' + karyawanId);
    }

    createKaryawan(Karyawan) {
        return axios.post(Karyawan_Api_Base_url + '/add', Karyawan);
    }

    updateKaryawan(Karyawan, KaryawanId) {
        Karyawan.id = KaryawanId;
        return axios.post(Karyawan_Api_Base_url + '/edit', Karyawan);
    }

    deleteKaryawan(data) {

        return axios.post(Karyawan_Api_Base_url + '/delete', data);
    }
}

export default new KaryawanService();
