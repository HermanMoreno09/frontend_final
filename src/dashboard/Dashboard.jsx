import React from 'react';

function Dashboard() {
  return (
    <>
      <div></div>
      <div className="content">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-body">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Capacity</p>
                      <p className="card-title">150GB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <hr />
                <div className="stats">
                  <i className="fa fa-refresh"></i> Update Now
                </div>
              </div>
            </div>
          </div>

          {/* Puedes duplicar y ajustar según los datos */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div className="card-body">
                <div className="row">
                  <div className="col-5 col-md-4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success"></i>
                    </div>
                  </div>
                  <div className="col-7 col-md-8">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <p className="card-title">$ 1,345</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar-o"></i> Last day
                </div>
              </div>
            </div>
          </div>

          {/* Repite los otros dos bloques similares... */}

        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Users Behavior</h5>
                <p className="card-category">24 Hours performance</p>
              </div>
              <div className="card-body">
                <canvas id="chartHours" width="400" height="100"></canvas>
              </div>
              <div className="card-footer">
                <hr />
                <div className="stats">
                  <i className="fa fa-history"></i> Updated 3 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Más contenido, gráficas, tarjetas, etc. */}
      </div>
    </>
  );
}
export default Dashboard;
