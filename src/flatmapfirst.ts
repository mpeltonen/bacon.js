import { handleEventValueWith, Spawner } from "./flatmap_"
import { Desc } from "./describe";
import Observable from "./observable";
import flatMap_ from "./flatmap_"

export default function flatMapFirst<V, V2>(src: Observable<V>, f: Spawner<V, V2>): Observable<V2> {
  return flatMap_(
    handleEventValueWith(f),
    src,
    {
      firstOnly: true,
      desc: new Desc(src, "flatMapFirst", [f])
    }
  )
}