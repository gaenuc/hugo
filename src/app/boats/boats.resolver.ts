import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, filter, map, of, take } from 'rxjs';
import { BoatService } from '../services/boat.service';

export const BoatResolver: ResolveFn<any> = (
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
    api: BoatService = inject(BoatService)
): Observable<any> => {
    const id = route.paramMap.get('id')!;
    return of(api.getData(id))
}