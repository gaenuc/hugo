import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, filter, map, of, take } from 'rxjs';
import { AccessoriesService } from '../services/accessories.service';

export const AccessoriesResolver: ResolveFn<any> = (
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
    api: AccessoriesService = inject(AccessoriesService)
): Observable<any> => {
    const id = route.paramMap.get('id')!;
    return of(api.getData(id))
}