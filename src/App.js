import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [sudut, setSudut] = useState('');
  const [lebar, setLebar] = useState('');
  const [hasilRafter, setHasilRafter] = useState('');

  const [angle, setAngle] = useState('');
  const [profile, setProfile] = useState('');
  const [resultSlope, setResultSlope] = useState('');

  const [tinggi, setTinggi] = useState('');
  const [lebarKemiringan, setLebarKemiringan] = useState('');
  const [hasilKemiringan, setHasilKemiringan] = useState('');

  const hitungPanjangRafter = () => {
    if (!sudut || !lebar) {
      setHasilRafter('Masukkan nilai yang valid untuk sudut dan lebar.');
      return;
    }

    const sudutRadian = (parseFloat(sudut) * Math.PI) / 180;
    const panjangRafter = parseFloat(lebar) / Math.cos(sudutRadian);
    setHasilRafter(`Panjang Rafter: ${panjangRafter.toFixed(2)} mm`);
  };

  const calculateCutSlope = () => {
    if (!angle || !profile) {
      setResultSlope('Masukkan nilai numerik yang valid!');
      return;
    }

    const angleInRadians = (parseFloat(angle) * Math.PI) / 180;
    const cutSlope = parseFloat(profile) * Math.tan(angleInRadians);
    setResultSlope(`Potongan Kemiringan Rafter: ${cutSlope.toFixed(2)} mm`);
  };

  const hitungKemiringan = () => {
    if (!tinggi || !lebarKemiringan || parseFloat(lebarKemiringan) === 0) {
      alert('Masukkan angka yang valid untuk tinggi dan lebar!');
      return;
    }

    const radian = Math.atan(parseFloat(tinggi) / parseFloat(lebarKemiringan));
    const derajat = (radian * 180) / Math.PI;
    setHasilKemiringan(`Derajat kemiringan atap adalah: ${derajat.toFixed(2)}°`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Aplikasi Perhitungan Rafter</h2>

      {/* Tabs Navigation */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="rafter-length-tab" data-toggle="tab" href="#rafter-length" role="tab">
            Panjang Rafter
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="cut-slope-tab" data-toggle="tab" href="#cut-slope" role="tab">
            Potongan Kemiringan Rafter
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="roof-slope-tab" data-toggle="tab" href="#roof-slope" role="tab">
            Menghitung Sudut Atap
          </a>
        </li>
      </ul>

      {/* Tab Contents */}
      <div className="tab-content mt-3">
        {/* Tab 1: Panjang Rafter */}
        <div className="tab-pane fade show active" id="rafter-length" role="tabpanel">
          <div className="form-group">
            <label>Sudut Kemiringan Atap (derajat):</label>
            <input
              type="number"
              className="form-control"
              value={sudut}
              onChange={(e) => setSudut(e.target.value)}
              placeholder="Masukkan sudut kemiringan"
            />
          </div>
          <div className="form-group">
            <label>Lebar Atap (mm):</label>
            <input
              type="number"
              className="form-control"
              value={lebar}
              onChange={(e) => setLebar(e.target.value)}
              placeholder="Masukkan lebar atap"
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={hitungPanjangRafter}>
            Hitung Panjang Rafter
          </button>
          <p className="mt-3">{hasilRafter}</p>
        </div>

        {/* Tab 2: Potongan Kemiringan Rafter */}
        <div className="tab-pane fade" id="cut-slope" role="tabpanel">
          <div className="form-group">
            <label>Sudut Kemiringan Atap (derajat):</label>
            <input
              type="number"
              className="form-control"
              value={angle}
              onChange={(e) => setAngle(e.target.value)}
              placeholder="Masukkan sudut kemiringan"
            />
          </div>
          <div className="form-group">
            <label>Profil Baja Rafter (mm):</label>
            <input
              type="number"
              className="form-control"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              placeholder="Masukkan profil baja"
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={calculateCutSlope}>
            Hitung Potongan Rafter
          </button>
          <p className="mt-3">{resultSlope}</p>
        </div>

        {/* Tab 3: Menghitung Sudut Atap */}
        <div className="tab-pane fade" id="roof-slope" role="tabpanel">
          <div className="form-group">
            <label>Tinggi Atap (mm):</label>
            <input
              type="number"
              className="form-control"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              placeholder="Masukkan tinggi atap"
            />
          </div>
          <div className="form-group">
            <label>Lebar Atap (mm):</label>
            <input
              type="number"
              className="form-control"
              value={lebarKemiringan}
              onChange={(e) => setLebarKemiringan(e.target.value)}
              placeholder="Masukkan lebar atap"
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={hitungKemiringan}>
            Hitung Sudut Atap
          </button>
          <p className="mt-3">{hasilKemiringan}</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
