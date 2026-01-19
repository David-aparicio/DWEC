import { HttpInterceptorFn } from '@angular/common/http';

export const nombreInterceptor: HttpInterceptorFn = (req, next) => {
   //ng g interceptor interceptors/auth --skip-tests
    //Opcion 3: creamos el interceptor y mete la cabecera en todas las peticiones

    const cloneRequest = req.clone({
        setHeaders: {
            'Content-type': 'application/json',
            'Authorization': localStorage.getItem("token") || ""
        }
    });

    if (cloneRequest.url.includes("login")) {
        return next(req);
    }
    else {
        return next(cloneRequest);
    };
};
