import React, { Fragment, useEffect, useState, Suspense, lazy } from "react"
import { useQuery } from "react-query";



const ActionPesquisaProdutoEtiqueta = lazy(() => import("../componets/Gerencia/Components/ActionProdutoEtiqueta/actionPesquisaProdutoEtiqueta").then(module => ({ default: module.ActionPesquisaProdutoEtiqueta })));

export const DashBoardGerencia = () => {
  const [componentToShow, setComponentToShow] = useState("");


  let component = null;

  switch (componentToShow) {
    case "/gerencia/ActionPesquisaProdutoEtiqueta":
      component = <ActionPesquisaProdutoEtiqueta />;
      break;
    default:
      component = null;
      break;
  }

  return (

    <Fragment>

      <div className="page-wrapper">
        <div className="page-inner">
        
          <div className="page-content-wrapper">
            
            <main id="js-page-content" role="main" className="page-content">
              <div className="row">
                <div className="col-xl-12">
                  <div id="panel-1" className="panel">
                    <div className="panel-container show">
                      <div className="panel-content">
                        <Suspense fallback={<div>Loading...</div>}>
                        
                          <ActionPesquisaProdutoEtiqueta />

                          
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            
          </div>
        </div>
      </div>
            
    </Fragment>
  )
}
