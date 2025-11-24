
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Amenities
 * 
 */
export type Amenities = $Result.DefaultSelection<Prisma.$AmenitiesPayload>
/**
 * Model TipoPropiedad
 * 
 */
export type TipoPropiedad = $Result.DefaultSelection<Prisma.$TipoPropiedadPayload>
/**
 * Model Propiedad
 * 
 */
export type Propiedad = $Result.DefaultSelection<Prisma.$PropiedadPayload>
/**
 * Model Favorito
 * 
 */
export type Favorito = $Result.DefaultSelection<Prisma.$FavoritoPayload>
/**
 * Model PropiedadImage
 * 
 */
export type PropiedadImage = $Result.DefaultSelection<Prisma.$PropiedadImagePayload>
/**
 * Model Contacto
 * 
 */
export type Contacto = $Result.DefaultSelection<Prisma.$ContactoPayload>
/**
 * Model Ciudad
 * 
 */
export type Ciudad = $Result.DefaultSelection<Prisma.$CiudadPayload>
/**
 * Model Servicio
 * 
 */
export type Servicio = $Result.DefaultSelection<Prisma.$ServicioPayload>
/**
 * Model ServicioImage
 * 
 */
export type ServicioImage = $Result.DefaultSelection<Prisma.$ServicioImagePayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  user: 'user'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TipoCategoria: {
  General: 'General'
};

export type TipoCategoria = (typeof TipoCategoria)[keyof typeof TipoCategoria]


export const UbicacionPropiedad: {
  ciudad: 'ciudad',
  campo: 'campo'
};

export type UbicacionPropiedad = (typeof UbicacionPropiedad)[keyof typeof UbicacionPropiedad]


export const RentaVenta: {
  renta: 'renta',
  venta: 'venta'
};

export type RentaVenta = (typeof RentaVenta)[keyof typeof RentaVenta]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TipoCategoria = $Enums.TipoCategoria

export const TipoCategoria: typeof $Enums.TipoCategoria

export type UbicacionPropiedad = $Enums.UbicacionPropiedad

export const UbicacionPropiedad: typeof $Enums.UbicacionPropiedad

export type RentaVenta = $Enums.RentaVenta

export const RentaVenta: typeof $Enums.RentaVenta

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amenities`: Exposes CRUD operations for the **Amenities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenities.findMany()
    * ```
    */
  get amenities(): Prisma.AmenitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoPropiedad`: Exposes CRUD operations for the **TipoPropiedad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoPropiedads
    * const tipoPropiedads = await prisma.tipoPropiedad.findMany()
    * ```
    */
  get tipoPropiedad(): Prisma.TipoPropiedadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propiedad`: Exposes CRUD operations for the **Propiedad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Propiedads
    * const propiedads = await prisma.propiedad.findMany()
    * ```
    */
  get propiedad(): Prisma.PropiedadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **Favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.FavoritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propiedadImage`: Exposes CRUD operations for the **PropiedadImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropiedadImages
    * const propiedadImages = await prisma.propiedadImage.findMany()
    * ```
    */
  get propiedadImage(): Prisma.PropiedadImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contacto`: Exposes CRUD operations for the **Contacto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactos
    * const contactos = await prisma.contacto.findMany()
    * ```
    */
  get contacto(): Prisma.ContactoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ciudad`: Exposes CRUD operations for the **Ciudad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ciudads
    * const ciudads = await prisma.ciudad.findMany()
    * ```
    */
  get ciudad(): Prisma.CiudadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicio`: Exposes CRUD operations for the **Servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.ServicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicioImage`: Exposes CRUD operations for the **ServicioImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicioImages
    * const servicioImages = await prisma.servicioImage.findMany()
    * ```
    */
  get servicioImage(): Prisma.ServicioImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Categoria: 'Categoria',
    Amenities: 'Amenities',
    TipoPropiedad: 'TipoPropiedad',
    Propiedad: 'Propiedad',
    Favorito: 'Favorito',
    PropiedadImage: 'PropiedadImage',
    Contacto: 'Contacto',
    Ciudad: 'Ciudad',
    Servicio: 'Servicio',
    ServicioImage: 'ServicioImage',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categoria" | "amenities" | "tipoPropiedad" | "propiedad" | "favorito" | "propiedadImage" | "contacto" | "ciudad" | "servicio" | "servicioImage" | "account" | "session" | "user" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Amenities: {
        payload: Prisma.$AmenitiesPayload<ExtArgs>
        fields: Prisma.AmenitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload>
          }
          findFirst: {
            args: Prisma.AmenitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload>
          }
          findMany: {
            args: Prisma.AmenitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload>[]
          }
          create: {
            args: Prisma.AmenitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload>
          }
          createMany: {
            args: Prisma.AmenitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmenitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload>[]
          }
          delete: {
            args: Prisma.AmenitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload>
          }
          update: {
            args: Prisma.AmenitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload>
          }
          deleteMany: {
            args: Prisma.AmenitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmenitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload>[]
          }
          upsert: {
            args: Prisma.AmenitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenitiesPayload>
          }
          aggregate: {
            args: Prisma.AmenitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenities>
          }
          groupBy: {
            args: Prisma.AmenitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenitiesCountArgs<ExtArgs>
            result: $Utils.Optional<AmenitiesCountAggregateOutputType> | number
          }
        }
      }
      TipoPropiedad: {
        payload: Prisma.$TipoPropiedadPayload<ExtArgs>
        fields: Prisma.TipoPropiedadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoPropiedadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoPropiedadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload>
          }
          findFirst: {
            args: Prisma.TipoPropiedadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoPropiedadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload>
          }
          findMany: {
            args: Prisma.TipoPropiedadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload>[]
          }
          create: {
            args: Prisma.TipoPropiedadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload>
          }
          createMany: {
            args: Prisma.TipoPropiedadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoPropiedadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload>[]
          }
          delete: {
            args: Prisma.TipoPropiedadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload>
          }
          update: {
            args: Prisma.TipoPropiedadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload>
          }
          deleteMany: {
            args: Prisma.TipoPropiedadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoPropiedadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoPropiedadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload>[]
          }
          upsert: {
            args: Prisma.TipoPropiedadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPropiedadPayload>
          }
          aggregate: {
            args: Prisma.TipoPropiedadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoPropiedad>
          }
          groupBy: {
            args: Prisma.TipoPropiedadGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoPropiedadGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoPropiedadCountArgs<ExtArgs>
            result: $Utils.Optional<TipoPropiedadCountAggregateOutputType> | number
          }
        }
      }
      Propiedad: {
        payload: Prisma.$PropiedadPayload<ExtArgs>
        fields: Prisma.PropiedadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropiedadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropiedadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload>
          }
          findFirst: {
            args: Prisma.PropiedadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropiedadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload>
          }
          findMany: {
            args: Prisma.PropiedadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload>[]
          }
          create: {
            args: Prisma.PropiedadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload>
          }
          createMany: {
            args: Prisma.PropiedadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropiedadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload>[]
          }
          delete: {
            args: Prisma.PropiedadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload>
          }
          update: {
            args: Prisma.PropiedadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload>
          }
          deleteMany: {
            args: Prisma.PropiedadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropiedadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropiedadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload>[]
          }
          upsert: {
            args: Prisma.PropiedadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadPayload>
          }
          aggregate: {
            args: Prisma.PropiedadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropiedad>
          }
          groupBy: {
            args: Prisma.PropiedadGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropiedadGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropiedadCountArgs<ExtArgs>
            result: $Utils.Optional<PropiedadCountAggregateOutputType> | number
          }
        }
      }
      Favorito: {
        payload: Prisma.$FavoritoPayload<ExtArgs>
        fields: Prisma.FavoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findFirst: {
            args: Prisma.FavoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findMany: {
            args: Prisma.FavoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          create: {
            args: Prisma.FavoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          createMany: {
            args: Prisma.FavoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoritoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          delete: {
            args: Prisma.FavoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          update: {
            args: Prisma.FavoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          deleteMany: {
            args: Prisma.FavoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoritoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          upsert: {
            args: Prisma.FavoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.FavoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      PropiedadImage: {
        payload: Prisma.$PropiedadImagePayload<ExtArgs>
        fields: Prisma.PropiedadImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropiedadImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropiedadImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload>
          }
          findFirst: {
            args: Prisma.PropiedadImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropiedadImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload>
          }
          findMany: {
            args: Prisma.PropiedadImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload>[]
          }
          create: {
            args: Prisma.PropiedadImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload>
          }
          createMany: {
            args: Prisma.PropiedadImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropiedadImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload>[]
          }
          delete: {
            args: Prisma.PropiedadImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload>
          }
          update: {
            args: Prisma.PropiedadImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload>
          }
          deleteMany: {
            args: Prisma.PropiedadImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropiedadImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropiedadImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload>[]
          }
          upsert: {
            args: Prisma.PropiedadImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropiedadImagePayload>
          }
          aggregate: {
            args: Prisma.PropiedadImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropiedadImage>
          }
          groupBy: {
            args: Prisma.PropiedadImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropiedadImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropiedadImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropiedadImageCountAggregateOutputType> | number
          }
        }
      }
      Contacto: {
        payload: Prisma.$ContactoPayload<ExtArgs>
        fields: Prisma.ContactoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          findFirst: {
            args: Prisma.ContactoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          findMany: {
            args: Prisma.ContactoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>[]
          }
          create: {
            args: Prisma.ContactoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          createMany: {
            args: Prisma.ContactoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>[]
          }
          delete: {
            args: Prisma.ContactoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          update: {
            args: Prisma.ContactoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          deleteMany: {
            args: Prisma.ContactoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>[]
          }
          upsert: {
            args: Prisma.ContactoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactoPayload>
          }
          aggregate: {
            args: Prisma.ContactoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacto>
          }
          groupBy: {
            args: Prisma.ContactoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactoCountAggregateOutputType> | number
          }
        }
      }
      Ciudad: {
        payload: Prisma.$CiudadPayload<ExtArgs>
        fields: Prisma.CiudadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CiudadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CiudadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          findFirst: {
            args: Prisma.CiudadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CiudadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          findMany: {
            args: Prisma.CiudadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>[]
          }
          create: {
            args: Prisma.CiudadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          createMany: {
            args: Prisma.CiudadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CiudadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>[]
          }
          delete: {
            args: Prisma.CiudadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          update: {
            args: Prisma.CiudadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          deleteMany: {
            args: Prisma.CiudadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CiudadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CiudadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>[]
          }
          upsert: {
            args: Prisma.CiudadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          aggregate: {
            args: Prisma.CiudadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCiudad>
          }
          groupBy: {
            args: Prisma.CiudadGroupByArgs<ExtArgs>
            result: $Utils.Optional<CiudadGroupByOutputType>[]
          }
          count: {
            args: Prisma.CiudadCountArgs<ExtArgs>
            result: $Utils.Optional<CiudadCountAggregateOutputType> | number
          }
        }
      }
      Servicio: {
        payload: Prisma.$ServicioPayload<ExtArgs>
        fields: Prisma.ServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findFirst: {
            args: Prisma.ServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findMany: {
            args: Prisma.ServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          create: {
            args: Prisma.ServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          createMany: {
            args: Prisma.ServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          delete: {
            args: Prisma.ServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          update: {
            args: Prisma.ServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          deleteMany: {
            args: Prisma.ServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          upsert: {
            args: Prisma.ServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          aggregate: {
            args: Prisma.ServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio>
          }
          groupBy: {
            args: Prisma.ServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioCountAggregateOutputType> | number
          }
        }
      }
      ServicioImage: {
        payload: Prisma.$ServicioImagePayload<ExtArgs>
        fields: Prisma.ServicioImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload>
          }
          findFirst: {
            args: Prisma.ServicioImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload>
          }
          findMany: {
            args: Prisma.ServicioImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload>[]
          }
          create: {
            args: Prisma.ServicioImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload>
          }
          createMany: {
            args: Prisma.ServicioImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicioImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload>[]
          }
          delete: {
            args: Prisma.ServicioImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload>
          }
          update: {
            args: Prisma.ServicioImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload>
          }
          deleteMany: {
            args: Prisma.ServicioImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicioImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload>[]
          }
          upsert: {
            args: Prisma.ServicioImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioImagePayload>
          }
          aggregate: {
            args: Prisma.ServicioImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicioImage>
          }
          groupBy: {
            args: Prisma.ServicioImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioImageCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioImageCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categoria?: CategoriaOmit
    amenities?: AmenitiesOmit
    tipoPropiedad?: TipoPropiedadOmit
    propiedad?: PropiedadOmit
    favorito?: FavoritoOmit
    propiedadImage?: PropiedadImageOmit
    contacto?: ContactoOmit
    ciudad?: CiudadOmit
    servicio?: ServicioOmit
    servicioImage?: ServicioImageOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    Propiedad: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Propiedad?: boolean | CategoriaCountOutputTypeCountPropiedadArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountPropiedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropiedadWhereInput
  }


  /**
   * Count Type AmenitiesCountOutputType
   */

  export type AmenitiesCountOutputType = {
    propiedades: number
  }

  export type AmenitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propiedades?: boolean | AmenitiesCountOutputTypeCountPropiedadesArgs
  }

  // Custom InputTypes
  /**
   * AmenitiesCountOutputType without action
   */
  export type AmenitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenitiesCountOutputType
     */
    select?: AmenitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmenitiesCountOutputType without action
   */
  export type AmenitiesCountOutputTypeCountPropiedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropiedadWhereInput
  }


  /**
   * Count Type TipoPropiedadCountOutputType
   */

  export type TipoPropiedadCountOutputType = {
    propiedades: number
  }

  export type TipoPropiedadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propiedades?: boolean | TipoPropiedadCountOutputTypeCountPropiedadesArgs
  }

  // Custom InputTypes
  /**
   * TipoPropiedadCountOutputType without action
   */
  export type TipoPropiedadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedadCountOutputType
     */
    select?: TipoPropiedadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoPropiedadCountOutputType without action
   */
  export type TipoPropiedadCountOutputTypeCountPropiedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropiedadWhereInput
  }


  /**
   * Count Type PropiedadCountOutputType
   */

  export type PropiedadCountOutputType = {
    amenities: number
    images: number
  }

  export type PropiedadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenities?: boolean | PropiedadCountOutputTypeCountAmenitiesArgs
    images?: boolean | PropiedadCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * PropiedadCountOutputType without action
   */
  export type PropiedadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadCountOutputType
     */
    select?: PropiedadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropiedadCountOutputType without action
   */
  export type PropiedadCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenitiesWhereInput
  }

  /**
   * PropiedadCountOutputType without action
   */
  export type PropiedadCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropiedadImageWhereInput
  }


  /**
   * Count Type CiudadCountOutputType
   */

  export type CiudadCountOutputType = {
    servicios: number
    propiedades: number
  }

  export type CiudadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicios?: boolean | CiudadCountOutputTypeCountServiciosArgs
    propiedades?: boolean | CiudadCountOutputTypeCountPropiedadesArgs
  }

  // Custom InputTypes
  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CiudadCountOutputType
     */
    select?: CiudadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeCountServiciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
  }

  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeCountPropiedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropiedadWhereInput
  }


  /**
   * Count Type ServicioCountOutputType
   */

  export type ServicioCountOutputType = {
    images: number
  }

  export type ServicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ServicioCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioCountOutputType
     */
    select?: ServicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioImageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    propiedades: number
    favoritos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    propiedades?: boolean | UserCountOutputTypeCountPropiedadesArgs
    favoritos?: boolean | UserCountOutputTypeCountFavoritosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPropiedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropiedadWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    tipo: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    tipo: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    name: string | null
    tipo: number | null
    estado: boolean | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    tipo: number | null
    estado: boolean | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    name: number
    tipo: number
    estado: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    tipo?: true
  }

  export type CategoriaSumAggregateInputType = {
    tipo?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    name?: true
    tipo?: true
    estado?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    name?: true
    tipo?: true
    estado?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    name?: true
    tipo?: true
    estado?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    name: string
    tipo: number
    estado: boolean
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tipo?: boolean
    estado?: boolean
    Propiedad?: boolean | Categoria$PropiedadArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tipo?: boolean
    estado?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tipo?: boolean
    estado?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    name?: boolean
    tipo?: boolean
    estado?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "tipo" | "estado", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Propiedad?: boolean | Categoria$PropiedadArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      Propiedad: Prisma.$PropiedadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      tipo: number
      estado: boolean
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Propiedad<T extends Categoria$PropiedadArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$PropiedadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly name: FieldRef<"Categoria", 'String'>
    readonly tipo: FieldRef<"Categoria", 'Int'>
    readonly estado: FieldRef<"Categoria", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.Propiedad
   */
  export type Categoria$PropiedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    where?: PropiedadWhereInput
    orderBy?: PropiedadOrderByWithRelationInput | PropiedadOrderByWithRelationInput[]
    cursor?: PropiedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropiedadScalarFieldEnum | PropiedadScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Amenities
   */

  export type AggregateAmenities = {
    _count: AmenitiesCountAggregateOutputType | null
    _min: AmenitiesMinAggregateOutputType | null
    _max: AmenitiesMaxAggregateOutputType | null
  }

  export type AmenitiesMinAggregateOutputType = {
    id: string | null
    name: string | null
    estado: boolean | null
  }

  export type AmenitiesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    estado: boolean | null
  }

  export type AmenitiesCountAggregateOutputType = {
    id: number
    name: number
    estado: number
    _all: number
  }


  export type AmenitiesMinAggregateInputType = {
    id?: true
    name?: true
    estado?: true
  }

  export type AmenitiesMaxAggregateInputType = {
    id?: true
    name?: true
    estado?: true
  }

  export type AmenitiesCountAggregateInputType = {
    id?: true
    name?: true
    estado?: true
    _all?: true
  }

  export type AmenitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to aggregate.
     */
    where?: AmenitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenitiesOrderByWithRelationInput | AmenitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amenities
    **/
    _count?: true | AmenitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenitiesMaxAggregateInputType
  }

  export type GetAmenitiesAggregateType<T extends AmenitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenities[P]>
      : GetScalarType<T[P], AggregateAmenities[P]>
  }




  export type AmenitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenitiesWhereInput
    orderBy?: AmenitiesOrderByWithAggregationInput | AmenitiesOrderByWithAggregationInput[]
    by: AmenitiesScalarFieldEnum[] | AmenitiesScalarFieldEnum
    having?: AmenitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenitiesCountAggregateInputType | true
    _min?: AmenitiesMinAggregateInputType
    _max?: AmenitiesMaxAggregateInputType
  }

  export type AmenitiesGroupByOutputType = {
    id: string
    name: string
    estado: boolean
    _count: AmenitiesCountAggregateOutputType | null
    _min: AmenitiesMinAggregateOutputType | null
    _max: AmenitiesMaxAggregateOutputType | null
  }

  type GetAmenitiesGroupByPayload<T extends AmenitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenitiesGroupByOutputType[P]>
            : GetScalarType<T[P], AmenitiesGroupByOutputType[P]>
        }
      >
    >


  export type AmenitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    estado?: boolean
    propiedades?: boolean | Amenities$propiedadesArgs<ExtArgs>
    _count?: boolean | AmenitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenities"]>

  export type AmenitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    estado?: boolean
  }, ExtArgs["result"]["amenities"]>

  export type AmenitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    estado?: boolean
  }, ExtArgs["result"]["amenities"]>

  export type AmenitiesSelectScalar = {
    id?: boolean
    name?: boolean
    estado?: boolean
  }

  export type AmenitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "estado", ExtArgs["result"]["amenities"]>
  export type AmenitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propiedades?: boolean | Amenities$propiedadesArgs<ExtArgs>
    _count?: boolean | AmenitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmenitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AmenitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AmenitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amenities"
    objects: {
      propiedades: Prisma.$PropiedadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      estado: boolean
    }, ExtArgs["result"]["amenities"]>
    composites: {}
  }

  type AmenitiesGetPayload<S extends boolean | null | undefined | AmenitiesDefaultArgs> = $Result.GetResult<Prisma.$AmenitiesPayload, S>

  type AmenitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmenitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmenitiesCountAggregateInputType | true
    }

  export interface AmenitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amenities'], meta: { name: 'Amenities' } }
    /**
     * Find zero or one Amenities that matches the filter.
     * @param {AmenitiesFindUniqueArgs} args - Arguments to find a Amenities
     * @example
     * // Get one Amenities
     * const amenities = await prisma.amenities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenitiesFindUniqueArgs>(args: SelectSubset<T, AmenitiesFindUniqueArgs<ExtArgs>>): Prisma__AmenitiesClient<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amenities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmenitiesFindUniqueOrThrowArgs} args - Arguments to find a Amenities
     * @example
     * // Get one Amenities
     * const amenities = await prisma.amenities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenitiesClient<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenitiesFindFirstArgs} args - Arguments to find a Amenities
     * @example
     * // Get one Amenities
     * const amenities = await prisma.amenities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenitiesFindFirstArgs>(args?: SelectSubset<T, AmenitiesFindFirstArgs<ExtArgs>>): Prisma__AmenitiesClient<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenitiesFindFirstOrThrowArgs} args - Arguments to find a Amenities
     * @example
     * // Get one Amenities
     * const amenities = await prisma.amenities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenitiesClient<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenities.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amenitiesWithIdOnly = await prisma.amenities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmenitiesFindManyArgs>(args?: SelectSubset<T, AmenitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amenities.
     * @param {AmenitiesCreateArgs} args - Arguments to create a Amenities.
     * @example
     * // Create one Amenities
     * const Amenities = await prisma.amenities.create({
     *   data: {
     *     // ... data to create a Amenities
     *   }
     * })
     * 
     */
    create<T extends AmenitiesCreateArgs>(args: SelectSubset<T, AmenitiesCreateArgs<ExtArgs>>): Prisma__AmenitiesClient<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amenities.
     * @param {AmenitiesCreateManyArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenities = await prisma.amenities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenitiesCreateManyArgs>(args?: SelectSubset<T, AmenitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amenities and returns the data saved in the database.
     * @param {AmenitiesCreateManyAndReturnArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenities = await prisma.amenities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amenities and only return the `id`
     * const amenitiesWithIdOnly = await prisma.amenities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmenitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, AmenitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amenities.
     * @param {AmenitiesDeleteArgs} args - Arguments to delete one Amenities.
     * @example
     * // Delete one Amenities
     * const Amenities = await prisma.amenities.delete({
     *   where: {
     *     // ... filter to delete one Amenities
     *   }
     * })
     * 
     */
    delete<T extends AmenitiesDeleteArgs>(args: SelectSubset<T, AmenitiesDeleteArgs<ExtArgs>>): Prisma__AmenitiesClient<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amenities.
     * @param {AmenitiesUpdateArgs} args - Arguments to update one Amenities.
     * @example
     * // Update one Amenities
     * const amenities = await prisma.amenities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenitiesUpdateArgs>(args: SelectSubset<T, AmenitiesUpdateArgs<ExtArgs>>): Prisma__AmenitiesClient<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amenities.
     * @param {AmenitiesDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenitiesDeleteManyArgs>(args?: SelectSubset<T, AmenitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenities = await prisma.amenities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenitiesUpdateManyArgs>(args: SelectSubset<T, AmenitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities and returns the data updated in the database.
     * @param {AmenitiesUpdateManyAndReturnArgs} args - Arguments to update many Amenities.
     * @example
     * // Update many Amenities
     * const amenities = await prisma.amenities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amenities and only return the `id`
     * const amenitiesWithIdOnly = await prisma.amenities.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AmenitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, AmenitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amenities.
     * @param {AmenitiesUpsertArgs} args - Arguments to update or create a Amenities.
     * @example
     * // Update or create a Amenities
     * const amenities = await prisma.amenities.upsert({
     *   create: {
     *     // ... data to create a Amenities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenities we want to update
     *   }
     * })
     */
    upsert<T extends AmenitiesUpsertArgs>(args: SelectSubset<T, AmenitiesUpsertArgs<ExtArgs>>): Prisma__AmenitiesClient<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenitiesCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenities.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends AmenitiesCountArgs>(
      args?: Subset<T, AmenitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AmenitiesAggregateArgs>(args: Subset<T, AmenitiesAggregateArgs>): Prisma.PrismaPromise<GetAmenitiesAggregateType<T>>

    /**
     * Group by Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AmenitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenitiesGroupByArgs['orderBy'] }
        : { orderBy?: AmenitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AmenitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amenities model
   */
  readonly fields: AmenitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amenities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propiedades<T extends Amenities$propiedadesArgs<ExtArgs> = {}>(args?: Subset<T, Amenities$propiedadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Amenities model
   */
  interface AmenitiesFieldRefs {
    readonly id: FieldRef<"Amenities", 'String'>
    readonly name: FieldRef<"Amenities", 'String'>
    readonly estado: FieldRef<"Amenities", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Amenities findUnique
   */
  export type AmenitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where: AmenitiesWhereUniqueInput
  }

  /**
   * Amenities findUniqueOrThrow
   */
  export type AmenitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where: AmenitiesWhereUniqueInput
  }

  /**
   * Amenities findFirst
   */
  export type AmenitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenitiesOrderByWithRelationInput | AmenitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenitiesScalarFieldEnum | AmenitiesScalarFieldEnum[]
  }

  /**
   * Amenities findFirstOrThrow
   */
  export type AmenitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenitiesOrderByWithRelationInput | AmenitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenitiesScalarFieldEnum | AmenitiesScalarFieldEnum[]
  }

  /**
   * Amenities findMany
   */
  export type AmenitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenitiesOrderByWithRelationInput | AmenitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amenities.
     */
    cursor?: AmenitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    distinct?: AmenitiesScalarFieldEnum | AmenitiesScalarFieldEnum[]
  }

  /**
   * Amenities create
   */
  export type AmenitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Amenities.
     */
    data: XOR<AmenitiesCreateInput, AmenitiesUncheckedCreateInput>
  }

  /**
   * Amenities createMany
   */
  export type AmenitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amenities.
     */
    data: AmenitiesCreateManyInput | AmenitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenities createManyAndReturn
   */
  export type AmenitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * The data used to create many Amenities.
     */
    data: AmenitiesCreateManyInput | AmenitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenities update
   */
  export type AmenitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Amenities.
     */
    data: XOR<AmenitiesUpdateInput, AmenitiesUncheckedUpdateInput>
    /**
     * Choose, which Amenities to update.
     */
    where: AmenitiesWhereUniqueInput
  }

  /**
   * Amenities updateMany
   */
  export type AmenitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenitiesUpdateManyMutationInput, AmenitiesUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenitiesWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenities updateManyAndReturn
   */
  export type AmenitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenitiesUpdateManyMutationInput, AmenitiesUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenitiesWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenities upsert
   */
  export type AmenitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Amenities to update in case it exists.
     */
    where: AmenitiesWhereUniqueInput
    /**
     * In case the Amenities found by the `where` argument doesn't exist, create a new Amenities with this data.
     */
    create: XOR<AmenitiesCreateInput, AmenitiesUncheckedCreateInput>
    /**
     * In case the Amenities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenitiesUpdateInput, AmenitiesUncheckedUpdateInput>
  }

  /**
   * Amenities delete
   */
  export type AmenitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
    /**
     * Filter which Amenities to delete.
     */
    where: AmenitiesWhereUniqueInput
  }

  /**
   * Amenities deleteMany
   */
  export type AmenitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to delete
     */
    where?: AmenitiesWhereInput
    /**
     * Limit how many Amenities to delete.
     */
    limit?: number
  }

  /**
   * Amenities.propiedades
   */
  export type Amenities$propiedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    where?: PropiedadWhereInput
    orderBy?: PropiedadOrderByWithRelationInput | PropiedadOrderByWithRelationInput[]
    cursor?: PropiedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropiedadScalarFieldEnum | PropiedadScalarFieldEnum[]
  }

  /**
   * Amenities without action
   */
  export type AmenitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
  }


  /**
   * Model TipoPropiedad
   */

  export type AggregateTipoPropiedad = {
    _count: TipoPropiedadCountAggregateOutputType | null
    _min: TipoPropiedadMinAggregateOutputType | null
    _max: TipoPropiedadMaxAggregateOutputType | null
  }

  export type TipoPropiedadMinAggregateOutputType = {
    id: string | null
    name: string | null
    estado: boolean | null
  }

  export type TipoPropiedadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    estado: boolean | null
  }

  export type TipoPropiedadCountAggregateOutputType = {
    id: number
    name: number
    estado: number
    _all: number
  }


  export type TipoPropiedadMinAggregateInputType = {
    id?: true
    name?: true
    estado?: true
  }

  export type TipoPropiedadMaxAggregateInputType = {
    id?: true
    name?: true
    estado?: true
  }

  export type TipoPropiedadCountAggregateInputType = {
    id?: true
    name?: true
    estado?: true
    _all?: true
  }

  export type TipoPropiedadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoPropiedad to aggregate.
     */
    where?: TipoPropiedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoPropiedads to fetch.
     */
    orderBy?: TipoPropiedadOrderByWithRelationInput | TipoPropiedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoPropiedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoPropiedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoPropiedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoPropiedads
    **/
    _count?: true | TipoPropiedadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoPropiedadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoPropiedadMaxAggregateInputType
  }

  export type GetTipoPropiedadAggregateType<T extends TipoPropiedadAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoPropiedad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoPropiedad[P]>
      : GetScalarType<T[P], AggregateTipoPropiedad[P]>
  }




  export type TipoPropiedadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoPropiedadWhereInput
    orderBy?: TipoPropiedadOrderByWithAggregationInput | TipoPropiedadOrderByWithAggregationInput[]
    by: TipoPropiedadScalarFieldEnum[] | TipoPropiedadScalarFieldEnum
    having?: TipoPropiedadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoPropiedadCountAggregateInputType | true
    _min?: TipoPropiedadMinAggregateInputType
    _max?: TipoPropiedadMaxAggregateInputType
  }

  export type TipoPropiedadGroupByOutputType = {
    id: string
    name: string
    estado: boolean
    _count: TipoPropiedadCountAggregateOutputType | null
    _min: TipoPropiedadMinAggregateOutputType | null
    _max: TipoPropiedadMaxAggregateOutputType | null
  }

  type GetTipoPropiedadGroupByPayload<T extends TipoPropiedadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoPropiedadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoPropiedadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoPropiedadGroupByOutputType[P]>
            : GetScalarType<T[P], TipoPropiedadGroupByOutputType[P]>
        }
      >
    >


  export type TipoPropiedadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    estado?: boolean
    propiedades?: boolean | TipoPropiedad$propiedadesArgs<ExtArgs>
    _count?: boolean | TipoPropiedadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoPropiedad"]>

  export type TipoPropiedadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    estado?: boolean
  }, ExtArgs["result"]["tipoPropiedad"]>

  export type TipoPropiedadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    estado?: boolean
  }, ExtArgs["result"]["tipoPropiedad"]>

  export type TipoPropiedadSelectScalar = {
    id?: boolean
    name?: boolean
    estado?: boolean
  }

  export type TipoPropiedadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "estado", ExtArgs["result"]["tipoPropiedad"]>
  export type TipoPropiedadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propiedades?: boolean | TipoPropiedad$propiedadesArgs<ExtArgs>
    _count?: boolean | TipoPropiedadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoPropiedadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoPropiedadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoPropiedadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoPropiedad"
    objects: {
      propiedades: Prisma.$PropiedadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      estado: boolean
    }, ExtArgs["result"]["tipoPropiedad"]>
    composites: {}
  }

  type TipoPropiedadGetPayload<S extends boolean | null | undefined | TipoPropiedadDefaultArgs> = $Result.GetResult<Prisma.$TipoPropiedadPayload, S>

  type TipoPropiedadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoPropiedadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoPropiedadCountAggregateInputType | true
    }

  export interface TipoPropiedadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoPropiedad'], meta: { name: 'TipoPropiedad' } }
    /**
     * Find zero or one TipoPropiedad that matches the filter.
     * @param {TipoPropiedadFindUniqueArgs} args - Arguments to find a TipoPropiedad
     * @example
     * // Get one TipoPropiedad
     * const tipoPropiedad = await prisma.tipoPropiedad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoPropiedadFindUniqueArgs>(args: SelectSubset<T, TipoPropiedadFindUniqueArgs<ExtArgs>>): Prisma__TipoPropiedadClient<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoPropiedad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoPropiedadFindUniqueOrThrowArgs} args - Arguments to find a TipoPropiedad
     * @example
     * // Get one TipoPropiedad
     * const tipoPropiedad = await prisma.tipoPropiedad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoPropiedadFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoPropiedadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoPropiedadClient<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoPropiedad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPropiedadFindFirstArgs} args - Arguments to find a TipoPropiedad
     * @example
     * // Get one TipoPropiedad
     * const tipoPropiedad = await prisma.tipoPropiedad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoPropiedadFindFirstArgs>(args?: SelectSubset<T, TipoPropiedadFindFirstArgs<ExtArgs>>): Prisma__TipoPropiedadClient<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoPropiedad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPropiedadFindFirstOrThrowArgs} args - Arguments to find a TipoPropiedad
     * @example
     * // Get one TipoPropiedad
     * const tipoPropiedad = await prisma.tipoPropiedad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoPropiedadFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoPropiedadFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoPropiedadClient<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoPropiedads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPropiedadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoPropiedads
     * const tipoPropiedads = await prisma.tipoPropiedad.findMany()
     * 
     * // Get first 10 TipoPropiedads
     * const tipoPropiedads = await prisma.tipoPropiedad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoPropiedadWithIdOnly = await prisma.tipoPropiedad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoPropiedadFindManyArgs>(args?: SelectSubset<T, TipoPropiedadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoPropiedad.
     * @param {TipoPropiedadCreateArgs} args - Arguments to create a TipoPropiedad.
     * @example
     * // Create one TipoPropiedad
     * const TipoPropiedad = await prisma.tipoPropiedad.create({
     *   data: {
     *     // ... data to create a TipoPropiedad
     *   }
     * })
     * 
     */
    create<T extends TipoPropiedadCreateArgs>(args: SelectSubset<T, TipoPropiedadCreateArgs<ExtArgs>>): Prisma__TipoPropiedadClient<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoPropiedads.
     * @param {TipoPropiedadCreateManyArgs} args - Arguments to create many TipoPropiedads.
     * @example
     * // Create many TipoPropiedads
     * const tipoPropiedad = await prisma.tipoPropiedad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoPropiedadCreateManyArgs>(args?: SelectSubset<T, TipoPropiedadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoPropiedads and returns the data saved in the database.
     * @param {TipoPropiedadCreateManyAndReturnArgs} args - Arguments to create many TipoPropiedads.
     * @example
     * // Create many TipoPropiedads
     * const tipoPropiedad = await prisma.tipoPropiedad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoPropiedads and only return the `id`
     * const tipoPropiedadWithIdOnly = await prisma.tipoPropiedad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoPropiedadCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoPropiedadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoPropiedad.
     * @param {TipoPropiedadDeleteArgs} args - Arguments to delete one TipoPropiedad.
     * @example
     * // Delete one TipoPropiedad
     * const TipoPropiedad = await prisma.tipoPropiedad.delete({
     *   where: {
     *     // ... filter to delete one TipoPropiedad
     *   }
     * })
     * 
     */
    delete<T extends TipoPropiedadDeleteArgs>(args: SelectSubset<T, TipoPropiedadDeleteArgs<ExtArgs>>): Prisma__TipoPropiedadClient<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoPropiedad.
     * @param {TipoPropiedadUpdateArgs} args - Arguments to update one TipoPropiedad.
     * @example
     * // Update one TipoPropiedad
     * const tipoPropiedad = await prisma.tipoPropiedad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoPropiedadUpdateArgs>(args: SelectSubset<T, TipoPropiedadUpdateArgs<ExtArgs>>): Prisma__TipoPropiedadClient<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoPropiedads.
     * @param {TipoPropiedadDeleteManyArgs} args - Arguments to filter TipoPropiedads to delete.
     * @example
     * // Delete a few TipoPropiedads
     * const { count } = await prisma.tipoPropiedad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoPropiedadDeleteManyArgs>(args?: SelectSubset<T, TipoPropiedadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoPropiedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPropiedadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoPropiedads
     * const tipoPropiedad = await prisma.tipoPropiedad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoPropiedadUpdateManyArgs>(args: SelectSubset<T, TipoPropiedadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoPropiedads and returns the data updated in the database.
     * @param {TipoPropiedadUpdateManyAndReturnArgs} args - Arguments to update many TipoPropiedads.
     * @example
     * // Update many TipoPropiedads
     * const tipoPropiedad = await prisma.tipoPropiedad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoPropiedads and only return the `id`
     * const tipoPropiedadWithIdOnly = await prisma.tipoPropiedad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TipoPropiedadUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoPropiedadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoPropiedad.
     * @param {TipoPropiedadUpsertArgs} args - Arguments to update or create a TipoPropiedad.
     * @example
     * // Update or create a TipoPropiedad
     * const tipoPropiedad = await prisma.tipoPropiedad.upsert({
     *   create: {
     *     // ... data to create a TipoPropiedad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoPropiedad we want to update
     *   }
     * })
     */
    upsert<T extends TipoPropiedadUpsertArgs>(args: SelectSubset<T, TipoPropiedadUpsertArgs<ExtArgs>>): Prisma__TipoPropiedadClient<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoPropiedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPropiedadCountArgs} args - Arguments to filter TipoPropiedads to count.
     * @example
     * // Count the number of TipoPropiedads
     * const count = await prisma.tipoPropiedad.count({
     *   where: {
     *     // ... the filter for the TipoPropiedads we want to count
     *   }
     * })
    **/
    count<T extends TipoPropiedadCountArgs>(
      args?: Subset<T, TipoPropiedadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoPropiedadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoPropiedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPropiedadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoPropiedadAggregateArgs>(args: Subset<T, TipoPropiedadAggregateArgs>): Prisma.PrismaPromise<GetTipoPropiedadAggregateType<T>>

    /**
     * Group by TipoPropiedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoPropiedadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoPropiedadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoPropiedadGroupByArgs['orderBy'] }
        : { orderBy?: TipoPropiedadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoPropiedadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoPropiedadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoPropiedad model
   */
  readonly fields: TipoPropiedadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoPropiedad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoPropiedadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propiedades<T extends TipoPropiedad$propiedadesArgs<ExtArgs> = {}>(args?: Subset<T, TipoPropiedad$propiedadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoPropiedad model
   */
  interface TipoPropiedadFieldRefs {
    readonly id: FieldRef<"TipoPropiedad", 'String'>
    readonly name: FieldRef<"TipoPropiedad", 'String'>
    readonly estado: FieldRef<"TipoPropiedad", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TipoPropiedad findUnique
   */
  export type TipoPropiedadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
    /**
     * Filter, which TipoPropiedad to fetch.
     */
    where: TipoPropiedadWhereUniqueInput
  }

  /**
   * TipoPropiedad findUniqueOrThrow
   */
  export type TipoPropiedadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
    /**
     * Filter, which TipoPropiedad to fetch.
     */
    where: TipoPropiedadWhereUniqueInput
  }

  /**
   * TipoPropiedad findFirst
   */
  export type TipoPropiedadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
    /**
     * Filter, which TipoPropiedad to fetch.
     */
    where?: TipoPropiedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoPropiedads to fetch.
     */
    orderBy?: TipoPropiedadOrderByWithRelationInput | TipoPropiedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoPropiedads.
     */
    cursor?: TipoPropiedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoPropiedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoPropiedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoPropiedads.
     */
    distinct?: TipoPropiedadScalarFieldEnum | TipoPropiedadScalarFieldEnum[]
  }

  /**
   * TipoPropiedad findFirstOrThrow
   */
  export type TipoPropiedadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
    /**
     * Filter, which TipoPropiedad to fetch.
     */
    where?: TipoPropiedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoPropiedads to fetch.
     */
    orderBy?: TipoPropiedadOrderByWithRelationInput | TipoPropiedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoPropiedads.
     */
    cursor?: TipoPropiedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoPropiedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoPropiedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoPropiedads.
     */
    distinct?: TipoPropiedadScalarFieldEnum | TipoPropiedadScalarFieldEnum[]
  }

  /**
   * TipoPropiedad findMany
   */
  export type TipoPropiedadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
    /**
     * Filter, which TipoPropiedads to fetch.
     */
    where?: TipoPropiedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoPropiedads to fetch.
     */
    orderBy?: TipoPropiedadOrderByWithRelationInput | TipoPropiedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoPropiedads.
     */
    cursor?: TipoPropiedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoPropiedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoPropiedads.
     */
    skip?: number
    distinct?: TipoPropiedadScalarFieldEnum | TipoPropiedadScalarFieldEnum[]
  }

  /**
   * TipoPropiedad create
   */
  export type TipoPropiedadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoPropiedad.
     */
    data: XOR<TipoPropiedadCreateInput, TipoPropiedadUncheckedCreateInput>
  }

  /**
   * TipoPropiedad createMany
   */
  export type TipoPropiedadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoPropiedads.
     */
    data: TipoPropiedadCreateManyInput | TipoPropiedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoPropiedad createManyAndReturn
   */
  export type TipoPropiedadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * The data used to create many TipoPropiedads.
     */
    data: TipoPropiedadCreateManyInput | TipoPropiedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoPropiedad update
   */
  export type TipoPropiedadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoPropiedad.
     */
    data: XOR<TipoPropiedadUpdateInput, TipoPropiedadUncheckedUpdateInput>
    /**
     * Choose, which TipoPropiedad to update.
     */
    where: TipoPropiedadWhereUniqueInput
  }

  /**
   * TipoPropiedad updateMany
   */
  export type TipoPropiedadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoPropiedads.
     */
    data: XOR<TipoPropiedadUpdateManyMutationInput, TipoPropiedadUncheckedUpdateManyInput>
    /**
     * Filter which TipoPropiedads to update
     */
    where?: TipoPropiedadWhereInput
    /**
     * Limit how many TipoPropiedads to update.
     */
    limit?: number
  }

  /**
   * TipoPropiedad updateManyAndReturn
   */
  export type TipoPropiedadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * The data used to update TipoPropiedads.
     */
    data: XOR<TipoPropiedadUpdateManyMutationInput, TipoPropiedadUncheckedUpdateManyInput>
    /**
     * Filter which TipoPropiedads to update
     */
    where?: TipoPropiedadWhereInput
    /**
     * Limit how many TipoPropiedads to update.
     */
    limit?: number
  }

  /**
   * TipoPropiedad upsert
   */
  export type TipoPropiedadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoPropiedad to update in case it exists.
     */
    where: TipoPropiedadWhereUniqueInput
    /**
     * In case the TipoPropiedad found by the `where` argument doesn't exist, create a new TipoPropiedad with this data.
     */
    create: XOR<TipoPropiedadCreateInput, TipoPropiedadUncheckedCreateInput>
    /**
     * In case the TipoPropiedad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoPropiedadUpdateInput, TipoPropiedadUncheckedUpdateInput>
  }

  /**
   * TipoPropiedad delete
   */
  export type TipoPropiedadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
    /**
     * Filter which TipoPropiedad to delete.
     */
    where: TipoPropiedadWhereUniqueInput
  }

  /**
   * TipoPropiedad deleteMany
   */
  export type TipoPropiedadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoPropiedads to delete
     */
    where?: TipoPropiedadWhereInput
    /**
     * Limit how many TipoPropiedads to delete.
     */
    limit?: number
  }

  /**
   * TipoPropiedad.propiedades
   */
  export type TipoPropiedad$propiedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    where?: PropiedadWhereInput
    orderBy?: PropiedadOrderByWithRelationInput | PropiedadOrderByWithRelationInput[]
    cursor?: PropiedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropiedadScalarFieldEnum | PropiedadScalarFieldEnum[]
  }

  /**
   * TipoPropiedad without action
   */
  export type TipoPropiedadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
  }


  /**
   * Model Propiedad
   */

  export type AggregatePropiedad = {
    _count: PropiedadCountAggregateOutputType | null
    _avg: PropiedadAvgAggregateOutputType | null
    _sum: PropiedadSumAggregateOutputType | null
    _min: PropiedadMinAggregateOutputType | null
    _max: PropiedadMaxAggregateOutputType | null
  }

  export type PropiedadAvgAggregateOutputType = {
    precio: number | null
    metros: number | null
    altura: number | null
  }

  export type PropiedadSumAggregateOutputType = {
    precio: number | null
    metros: number | null
    altura: number | null
  }

  export type PropiedadMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    apto: string | null
    precio: number | null
    metros: number | null
    altura: number | null
    address: string | null
    geoLink: string | null
    esPrincipal: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    rentaVenta: string | null
    temperatura: string | null
    categoriaId: string | null
    tipoPropiedadId: string | null
    ciudadId: string | null
    userId: string | null
  }

  export type PropiedadMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    apto: string | null
    precio: number | null
    metros: number | null
    altura: number | null
    address: string | null
    geoLink: string | null
    esPrincipal: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    rentaVenta: string | null
    temperatura: string | null
    categoriaId: string | null
    tipoPropiedadId: string | null
    ciudadId: string | null
    userId: string | null
  }

  export type PropiedadCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    apto: number
    precio: number
    metros: number
    altura: number
    address: number
    geoLink: number
    esPrincipal: number
    createdAt: number
    updatedAt: number
    rentaVenta: number
    temperatura: number
    categoriaId: number
    tipoPropiedadId: number
    ciudadId: number
    userId: number
    _all: number
  }


  export type PropiedadAvgAggregateInputType = {
    precio?: true
    metros?: true
    altura?: true
  }

  export type PropiedadSumAggregateInputType = {
    precio?: true
    metros?: true
    altura?: true
  }

  export type PropiedadMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    apto?: true
    precio?: true
    metros?: true
    altura?: true
    address?: true
    geoLink?: true
    esPrincipal?: true
    createdAt?: true
    updatedAt?: true
    rentaVenta?: true
    temperatura?: true
    categoriaId?: true
    tipoPropiedadId?: true
    ciudadId?: true
    userId?: true
  }

  export type PropiedadMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    apto?: true
    precio?: true
    metros?: true
    altura?: true
    address?: true
    geoLink?: true
    esPrincipal?: true
    createdAt?: true
    updatedAt?: true
    rentaVenta?: true
    temperatura?: true
    categoriaId?: true
    tipoPropiedadId?: true
    ciudadId?: true
    userId?: true
  }

  export type PropiedadCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    apto?: true
    precio?: true
    metros?: true
    altura?: true
    address?: true
    geoLink?: true
    esPrincipal?: true
    createdAt?: true
    updatedAt?: true
    rentaVenta?: true
    temperatura?: true
    categoriaId?: true
    tipoPropiedadId?: true
    ciudadId?: true
    userId?: true
    _all?: true
  }

  export type PropiedadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propiedad to aggregate.
     */
    where?: PropiedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propiedads to fetch.
     */
    orderBy?: PropiedadOrderByWithRelationInput | PropiedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropiedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propiedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propiedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Propiedads
    **/
    _count?: true | PropiedadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropiedadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropiedadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropiedadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropiedadMaxAggregateInputType
  }

  export type GetPropiedadAggregateType<T extends PropiedadAggregateArgs> = {
        [P in keyof T & keyof AggregatePropiedad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropiedad[P]>
      : GetScalarType<T[P], AggregatePropiedad[P]>
  }




  export type PropiedadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropiedadWhereInput
    orderBy?: PropiedadOrderByWithAggregationInput | PropiedadOrderByWithAggregationInput[]
    by: PropiedadScalarFieldEnum[] | PropiedadScalarFieldEnum
    having?: PropiedadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropiedadCountAggregateInputType | true
    _avg?: PropiedadAvgAggregateInputType
    _sum?: PropiedadSumAggregateInputType
    _min?: PropiedadMinAggregateInputType
    _max?: PropiedadMaxAggregateInputType
  }

  export type PropiedadGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string | null
    apto: string | null
    precio: number
    metros: number
    altura: number
    address: string | null
    geoLink: string
    esPrincipal: boolean
    createdAt: Date
    updatedAt: Date
    rentaVenta: string | null
    temperatura: string | null
    categoriaId: string
    tipoPropiedadId: string
    ciudadId: string
    userId: string | null
    _count: PropiedadCountAggregateOutputType | null
    _avg: PropiedadAvgAggregateOutputType | null
    _sum: PropiedadSumAggregateOutputType | null
    _min: PropiedadMinAggregateOutputType | null
    _max: PropiedadMaxAggregateOutputType | null
  }

  type GetPropiedadGroupByPayload<T extends PropiedadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropiedadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropiedadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropiedadGroupByOutputType[P]>
            : GetScalarType<T[P], PropiedadGroupByOutputType[P]>
        }
      >
    >


  export type PropiedadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    apto?: boolean
    precio?: boolean
    metros?: boolean
    altura?: boolean
    address?: boolean
    geoLink?: boolean
    esPrincipal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentaVenta?: boolean
    temperatura?: boolean
    categoriaId?: boolean
    tipoPropiedadId?: boolean
    ciudadId?: boolean
    userId?: boolean
    categoria?: boolean | Propiedad$categoriaArgs<ExtArgs>
    tipoPropiedad?: boolean | Propiedad$tipoPropiedadArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    amenities?: boolean | Propiedad$amenitiesArgs<ExtArgs>
    images?: boolean | Propiedad$imagesArgs<ExtArgs>
    User?: boolean | Propiedad$UserArgs<ExtArgs>
    _count?: boolean | PropiedadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propiedad"]>

  export type PropiedadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    apto?: boolean
    precio?: boolean
    metros?: boolean
    altura?: boolean
    address?: boolean
    geoLink?: boolean
    esPrincipal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentaVenta?: boolean
    temperatura?: boolean
    categoriaId?: boolean
    tipoPropiedadId?: boolean
    ciudadId?: boolean
    userId?: boolean
    categoria?: boolean | Propiedad$categoriaArgs<ExtArgs>
    tipoPropiedad?: boolean | Propiedad$tipoPropiedadArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    User?: boolean | Propiedad$UserArgs<ExtArgs>
  }, ExtArgs["result"]["propiedad"]>

  export type PropiedadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    apto?: boolean
    precio?: boolean
    metros?: boolean
    altura?: boolean
    address?: boolean
    geoLink?: boolean
    esPrincipal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentaVenta?: boolean
    temperatura?: boolean
    categoriaId?: boolean
    tipoPropiedadId?: boolean
    ciudadId?: boolean
    userId?: boolean
    categoria?: boolean | Propiedad$categoriaArgs<ExtArgs>
    tipoPropiedad?: boolean | Propiedad$tipoPropiedadArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    User?: boolean | Propiedad$UserArgs<ExtArgs>
  }, ExtArgs["result"]["propiedad"]>

  export type PropiedadSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    apto?: boolean
    precio?: boolean
    metros?: boolean
    altura?: boolean
    address?: boolean
    geoLink?: boolean
    esPrincipal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentaVenta?: boolean
    temperatura?: boolean
    categoriaId?: boolean
    tipoPropiedadId?: boolean
    ciudadId?: boolean
    userId?: boolean
  }

  export type PropiedadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "apto" | "precio" | "metros" | "altura" | "address" | "geoLink" | "esPrincipal" | "createdAt" | "updatedAt" | "rentaVenta" | "temperatura" | "categoriaId" | "tipoPropiedadId" | "ciudadId" | "userId", ExtArgs["result"]["propiedad"]>
  export type PropiedadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Propiedad$categoriaArgs<ExtArgs>
    tipoPropiedad?: boolean | Propiedad$tipoPropiedadArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    amenities?: boolean | Propiedad$amenitiesArgs<ExtArgs>
    images?: boolean | Propiedad$imagesArgs<ExtArgs>
    User?: boolean | Propiedad$UserArgs<ExtArgs>
    _count?: boolean | PropiedadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropiedadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Propiedad$categoriaArgs<ExtArgs>
    tipoPropiedad?: boolean | Propiedad$tipoPropiedadArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    User?: boolean | Propiedad$UserArgs<ExtArgs>
  }
  export type PropiedadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Propiedad$categoriaArgs<ExtArgs>
    tipoPropiedad?: boolean | Propiedad$tipoPropiedadArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    User?: boolean | Propiedad$UserArgs<ExtArgs>
  }

  export type $PropiedadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Propiedad"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      tipoPropiedad: Prisma.$TipoPropiedadPayload<ExtArgs> | null
      ciudad: Prisma.$CiudadPayload<ExtArgs>
      amenities: Prisma.$AmenitiesPayload<ExtArgs>[]
      images: Prisma.$PropiedadImagePayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string | null
      apto: string | null
      precio: number
      metros: number
      altura: number
      address: string | null
      geoLink: string
      esPrincipal: boolean
      createdAt: Date
      updatedAt: Date
      rentaVenta: string | null
      temperatura: string | null
      categoriaId: string
      tipoPropiedadId: string
      ciudadId: string
      userId: string | null
    }, ExtArgs["result"]["propiedad"]>
    composites: {}
  }

  type PropiedadGetPayload<S extends boolean | null | undefined | PropiedadDefaultArgs> = $Result.GetResult<Prisma.$PropiedadPayload, S>

  type PropiedadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropiedadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropiedadCountAggregateInputType | true
    }

  export interface PropiedadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Propiedad'], meta: { name: 'Propiedad' } }
    /**
     * Find zero or one Propiedad that matches the filter.
     * @param {PropiedadFindUniqueArgs} args - Arguments to find a Propiedad
     * @example
     * // Get one Propiedad
     * const propiedad = await prisma.propiedad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropiedadFindUniqueArgs>(args: SelectSubset<T, PropiedadFindUniqueArgs<ExtArgs>>): Prisma__PropiedadClient<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Propiedad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropiedadFindUniqueOrThrowArgs} args - Arguments to find a Propiedad
     * @example
     * // Get one Propiedad
     * const propiedad = await prisma.propiedad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropiedadFindUniqueOrThrowArgs>(args: SelectSubset<T, PropiedadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropiedadClient<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Propiedad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadFindFirstArgs} args - Arguments to find a Propiedad
     * @example
     * // Get one Propiedad
     * const propiedad = await prisma.propiedad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropiedadFindFirstArgs>(args?: SelectSubset<T, PropiedadFindFirstArgs<ExtArgs>>): Prisma__PropiedadClient<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Propiedad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadFindFirstOrThrowArgs} args - Arguments to find a Propiedad
     * @example
     * // Get one Propiedad
     * const propiedad = await prisma.propiedad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropiedadFindFirstOrThrowArgs>(args?: SelectSubset<T, PropiedadFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropiedadClient<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Propiedads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Propiedads
     * const propiedads = await prisma.propiedad.findMany()
     * 
     * // Get first 10 Propiedads
     * const propiedads = await prisma.propiedad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propiedadWithIdOnly = await prisma.propiedad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropiedadFindManyArgs>(args?: SelectSubset<T, PropiedadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Propiedad.
     * @param {PropiedadCreateArgs} args - Arguments to create a Propiedad.
     * @example
     * // Create one Propiedad
     * const Propiedad = await prisma.propiedad.create({
     *   data: {
     *     // ... data to create a Propiedad
     *   }
     * })
     * 
     */
    create<T extends PropiedadCreateArgs>(args: SelectSubset<T, PropiedadCreateArgs<ExtArgs>>): Prisma__PropiedadClient<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Propiedads.
     * @param {PropiedadCreateManyArgs} args - Arguments to create many Propiedads.
     * @example
     * // Create many Propiedads
     * const propiedad = await prisma.propiedad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropiedadCreateManyArgs>(args?: SelectSubset<T, PropiedadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Propiedads and returns the data saved in the database.
     * @param {PropiedadCreateManyAndReturnArgs} args - Arguments to create many Propiedads.
     * @example
     * // Create many Propiedads
     * const propiedad = await prisma.propiedad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Propiedads and only return the `id`
     * const propiedadWithIdOnly = await prisma.propiedad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropiedadCreateManyAndReturnArgs>(args?: SelectSubset<T, PropiedadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Propiedad.
     * @param {PropiedadDeleteArgs} args - Arguments to delete one Propiedad.
     * @example
     * // Delete one Propiedad
     * const Propiedad = await prisma.propiedad.delete({
     *   where: {
     *     // ... filter to delete one Propiedad
     *   }
     * })
     * 
     */
    delete<T extends PropiedadDeleteArgs>(args: SelectSubset<T, PropiedadDeleteArgs<ExtArgs>>): Prisma__PropiedadClient<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Propiedad.
     * @param {PropiedadUpdateArgs} args - Arguments to update one Propiedad.
     * @example
     * // Update one Propiedad
     * const propiedad = await prisma.propiedad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropiedadUpdateArgs>(args: SelectSubset<T, PropiedadUpdateArgs<ExtArgs>>): Prisma__PropiedadClient<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Propiedads.
     * @param {PropiedadDeleteManyArgs} args - Arguments to filter Propiedads to delete.
     * @example
     * // Delete a few Propiedads
     * const { count } = await prisma.propiedad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropiedadDeleteManyArgs>(args?: SelectSubset<T, PropiedadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propiedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Propiedads
     * const propiedad = await prisma.propiedad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropiedadUpdateManyArgs>(args: SelectSubset<T, PropiedadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propiedads and returns the data updated in the database.
     * @param {PropiedadUpdateManyAndReturnArgs} args - Arguments to update many Propiedads.
     * @example
     * // Update many Propiedads
     * const propiedad = await prisma.propiedad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Propiedads and only return the `id`
     * const propiedadWithIdOnly = await prisma.propiedad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropiedadUpdateManyAndReturnArgs>(args: SelectSubset<T, PropiedadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Propiedad.
     * @param {PropiedadUpsertArgs} args - Arguments to update or create a Propiedad.
     * @example
     * // Update or create a Propiedad
     * const propiedad = await prisma.propiedad.upsert({
     *   create: {
     *     // ... data to create a Propiedad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Propiedad we want to update
     *   }
     * })
     */
    upsert<T extends PropiedadUpsertArgs>(args: SelectSubset<T, PropiedadUpsertArgs<ExtArgs>>): Prisma__PropiedadClient<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Propiedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadCountArgs} args - Arguments to filter Propiedads to count.
     * @example
     * // Count the number of Propiedads
     * const count = await prisma.propiedad.count({
     *   where: {
     *     // ... the filter for the Propiedads we want to count
     *   }
     * })
    **/
    count<T extends PropiedadCountArgs>(
      args?: Subset<T, PropiedadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropiedadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Propiedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropiedadAggregateArgs>(args: Subset<T, PropiedadAggregateArgs>): Prisma.PrismaPromise<GetPropiedadAggregateType<T>>

    /**
     * Group by Propiedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropiedadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropiedadGroupByArgs['orderBy'] }
        : { orderBy?: PropiedadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropiedadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropiedadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Propiedad model
   */
  readonly fields: PropiedadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Propiedad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropiedadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends Propiedad$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Propiedad$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tipoPropiedad<T extends Propiedad$tipoPropiedadArgs<ExtArgs> = {}>(args?: Subset<T, Propiedad$tipoPropiedadArgs<ExtArgs>>): Prisma__TipoPropiedadClient<$Result.GetResult<Prisma.$TipoPropiedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ciudad<T extends CiudadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CiudadDefaultArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    amenities<T extends Propiedad$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Propiedad$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Propiedad$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Propiedad$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Propiedad$UserArgs<ExtArgs> = {}>(args?: Subset<T, Propiedad$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Propiedad model
   */
  interface PropiedadFieldRefs {
    readonly id: FieldRef<"Propiedad", 'String'>
    readonly title: FieldRef<"Propiedad", 'String'>
    readonly slug: FieldRef<"Propiedad", 'String'>
    readonly description: FieldRef<"Propiedad", 'String'>
    readonly apto: FieldRef<"Propiedad", 'String'>
    readonly precio: FieldRef<"Propiedad", 'Float'>
    readonly metros: FieldRef<"Propiedad", 'Float'>
    readonly altura: FieldRef<"Propiedad", 'Float'>
    readonly address: FieldRef<"Propiedad", 'String'>
    readonly geoLink: FieldRef<"Propiedad", 'String'>
    readonly esPrincipal: FieldRef<"Propiedad", 'Boolean'>
    readonly createdAt: FieldRef<"Propiedad", 'DateTime'>
    readonly updatedAt: FieldRef<"Propiedad", 'DateTime'>
    readonly rentaVenta: FieldRef<"Propiedad", 'String'>
    readonly temperatura: FieldRef<"Propiedad", 'String'>
    readonly categoriaId: FieldRef<"Propiedad", 'String'>
    readonly tipoPropiedadId: FieldRef<"Propiedad", 'String'>
    readonly ciudadId: FieldRef<"Propiedad", 'String'>
    readonly userId: FieldRef<"Propiedad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Propiedad findUnique
   */
  export type PropiedadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    /**
     * Filter, which Propiedad to fetch.
     */
    where: PropiedadWhereUniqueInput
  }

  /**
   * Propiedad findUniqueOrThrow
   */
  export type PropiedadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    /**
     * Filter, which Propiedad to fetch.
     */
    where: PropiedadWhereUniqueInput
  }

  /**
   * Propiedad findFirst
   */
  export type PropiedadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    /**
     * Filter, which Propiedad to fetch.
     */
    where?: PropiedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propiedads to fetch.
     */
    orderBy?: PropiedadOrderByWithRelationInput | PropiedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propiedads.
     */
    cursor?: PropiedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propiedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propiedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propiedads.
     */
    distinct?: PropiedadScalarFieldEnum | PropiedadScalarFieldEnum[]
  }

  /**
   * Propiedad findFirstOrThrow
   */
  export type PropiedadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    /**
     * Filter, which Propiedad to fetch.
     */
    where?: PropiedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propiedads to fetch.
     */
    orderBy?: PropiedadOrderByWithRelationInput | PropiedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propiedads.
     */
    cursor?: PropiedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propiedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propiedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propiedads.
     */
    distinct?: PropiedadScalarFieldEnum | PropiedadScalarFieldEnum[]
  }

  /**
   * Propiedad findMany
   */
  export type PropiedadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    /**
     * Filter, which Propiedads to fetch.
     */
    where?: PropiedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propiedads to fetch.
     */
    orderBy?: PropiedadOrderByWithRelationInput | PropiedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Propiedads.
     */
    cursor?: PropiedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propiedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propiedads.
     */
    skip?: number
    distinct?: PropiedadScalarFieldEnum | PropiedadScalarFieldEnum[]
  }

  /**
   * Propiedad create
   */
  export type PropiedadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    /**
     * The data needed to create a Propiedad.
     */
    data: XOR<PropiedadCreateInput, PropiedadUncheckedCreateInput>
  }

  /**
   * Propiedad createMany
   */
  export type PropiedadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Propiedads.
     */
    data: PropiedadCreateManyInput | PropiedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Propiedad createManyAndReturn
   */
  export type PropiedadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * The data used to create many Propiedads.
     */
    data: PropiedadCreateManyInput | PropiedadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Propiedad update
   */
  export type PropiedadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    /**
     * The data needed to update a Propiedad.
     */
    data: XOR<PropiedadUpdateInput, PropiedadUncheckedUpdateInput>
    /**
     * Choose, which Propiedad to update.
     */
    where: PropiedadWhereUniqueInput
  }

  /**
   * Propiedad updateMany
   */
  export type PropiedadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Propiedads.
     */
    data: XOR<PropiedadUpdateManyMutationInput, PropiedadUncheckedUpdateManyInput>
    /**
     * Filter which Propiedads to update
     */
    where?: PropiedadWhereInput
    /**
     * Limit how many Propiedads to update.
     */
    limit?: number
  }

  /**
   * Propiedad updateManyAndReturn
   */
  export type PropiedadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * The data used to update Propiedads.
     */
    data: XOR<PropiedadUpdateManyMutationInput, PropiedadUncheckedUpdateManyInput>
    /**
     * Filter which Propiedads to update
     */
    where?: PropiedadWhereInput
    /**
     * Limit how many Propiedads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Propiedad upsert
   */
  export type PropiedadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    /**
     * The filter to search for the Propiedad to update in case it exists.
     */
    where: PropiedadWhereUniqueInput
    /**
     * In case the Propiedad found by the `where` argument doesn't exist, create a new Propiedad with this data.
     */
    create: XOR<PropiedadCreateInput, PropiedadUncheckedCreateInput>
    /**
     * In case the Propiedad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropiedadUpdateInput, PropiedadUncheckedUpdateInput>
  }

  /**
   * Propiedad delete
   */
  export type PropiedadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    /**
     * Filter which Propiedad to delete.
     */
    where: PropiedadWhereUniqueInput
  }

  /**
   * Propiedad deleteMany
   */
  export type PropiedadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propiedads to delete
     */
    where?: PropiedadWhereInput
    /**
     * Limit how many Propiedads to delete.
     */
    limit?: number
  }

  /**
   * Propiedad.categoria
   */
  export type Propiedad$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * Propiedad.tipoPropiedad
   */
  export type Propiedad$tipoPropiedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoPropiedad
     */
    select?: TipoPropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoPropiedad
     */
    omit?: TipoPropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoPropiedadInclude<ExtArgs> | null
    where?: TipoPropiedadWhereInput
  }

  /**
   * Propiedad.amenities
   */
  export type Propiedad$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenities
     */
    select?: AmenitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenities
     */
    omit?: AmenitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenitiesInclude<ExtArgs> | null
    where?: AmenitiesWhereInput
    orderBy?: AmenitiesOrderByWithRelationInput | AmenitiesOrderByWithRelationInput[]
    cursor?: AmenitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmenitiesScalarFieldEnum | AmenitiesScalarFieldEnum[]
  }

  /**
   * Propiedad.images
   */
  export type Propiedad$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
    where?: PropiedadImageWhereInput
    orderBy?: PropiedadImageOrderByWithRelationInput | PropiedadImageOrderByWithRelationInput[]
    cursor?: PropiedadImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropiedadImageScalarFieldEnum | PropiedadImageScalarFieldEnum[]
  }

  /**
   * Propiedad.User
   */
  export type Propiedad$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Propiedad without action
   */
  export type PropiedadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
  }


  /**
   * Model Favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    propiedadId: string | null
    createdAt: Date | null
  }

  export type FavoritoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    propiedadId: string | null
    createdAt: Date | null
  }

  export type FavoritoCountAggregateOutputType = {
    id: number
    userId: number
    propiedadId: number
    createdAt: number
    _all: number
  }


  export type FavoritoMinAggregateInputType = {
    id?: true
    userId?: true
    propiedadId?: true
    createdAt?: true
  }

  export type FavoritoMaxAggregateInputType = {
    id?: true
    userId?: true
    propiedadId?: true
    createdAt?: true
  }

  export type FavoritoCountAggregateInputType = {
    id?: true
    userId?: true
    propiedadId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorito to aggregate.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type FavoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithAggregationInput | FavoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: FavoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    id: string
    userId: string
    propiedadId: string
    createdAt: Date
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends FavoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type FavoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propiedadId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propiedadId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propiedadId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectScalar = {
    id?: boolean
    userId?: boolean
    propiedadId?: boolean
    createdAt?: boolean
  }

  export type FavoritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propiedadId" | "createdAt", ExtArgs["result"]["favorito"]>
  export type FavoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorito"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propiedadId: string
      createdAt: Date
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type FavoritoGetPayload<S extends boolean | null | undefined | FavoritoDefaultArgs> = $Result.GetResult<Prisma.$FavoritoPayload, S>

  type FavoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface FavoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorito'], meta: { name: 'Favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {FavoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritoFindUniqueArgs>(args: SelectSubset<T, FavoritoFindUniqueArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritoFindFirstArgs>(args?: SelectSubset<T, FavoritoFindFirstArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritoWithIdOnly = await prisma.favorito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritoFindManyArgs>(args?: SelectSubset<T, FavoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorito.
     * @param {FavoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends FavoritoCreateArgs>(args: SelectSubset<T, FavoritoCreateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favoritos.
     * @param {FavoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritoCreateManyArgs>(args?: SelectSubset<T, FavoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favoritos and returns the data saved in the database.
     * @param {FavoritoCreateManyAndReturnArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoritoCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorito.
     * @param {FavoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends FavoritoDeleteArgs>(args: SelectSubset<T, FavoritoDeleteArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorito.
     * @param {FavoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritoUpdateArgs>(args: SelectSubset<T, FavoritoUpdateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritoDeleteManyArgs>(args?: SelectSubset<T, FavoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritoUpdateManyArgs>(args: SelectSubset<T, FavoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos and returns the data updated in the database.
     * @param {FavoritoUpdateManyAndReturnArgs} args - Arguments to update many Favoritos.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoritoUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorito.
     * @param {FavoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends FavoritoUpsertArgs>(args: SelectSubset<T, FavoritoUpsertArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritoCountArgs>(
      args?: Subset<T, FavoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritoGroupByArgs['orderBy'] }
        : { orderBy?: FavoritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorito model
   */
  readonly fields: FavoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorito model
   */
  interface FavoritoFieldRefs {
    readonly id: FieldRef<"Favorito", 'String'>
    readonly userId: FieldRef<"Favorito", 'String'>
    readonly propiedadId: FieldRef<"Favorito", 'String'>
    readonly createdAt: FieldRef<"Favorito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorito findUnique
   */
  export type FavoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findUniqueOrThrow
   */
  export type FavoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findFirst
   */
  export type FavoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findFirstOrThrow
   */
  export type FavoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findMany
   */
  export type FavoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito create
   */
  export type FavoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorito.
     */
    data: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
  }

  /**
   * Favorito createMany
   */
  export type FavoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorito createManyAndReturn
   */
  export type FavoritoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito update
   */
  export type FavoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorito.
     */
    data: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
    /**
     * Choose, which Favorito to update.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito updateMany
   */
  export type FavoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
  }

  /**
   * Favorito updateManyAndReturn
   */
  export type FavoritoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito upsert
   */
  export type FavoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorito to update in case it exists.
     */
    where: FavoritoWhereUniqueInput
    /**
     * In case the Favorito found by the `where` argument doesn't exist, create a new Favorito with this data.
     */
    create: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
    /**
     * In case the Favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
  }

  /**
   * Favorito delete
   */
  export type FavoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter which Favorito to delete.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito deleteMany
   */
  export type FavoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritoWhereInput
    /**
     * Limit how many Favoritos to delete.
     */
    limit?: number
  }

  /**
   * Favorito without action
   */
  export type FavoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
  }


  /**
   * Model PropiedadImage
   */

  export type AggregatePropiedadImage = {
    _count: PropiedadImageCountAggregateOutputType | null
    _avg: PropiedadImageAvgAggregateOutputType | null
    _sum: PropiedadImageSumAggregateOutputType | null
    _min: PropiedadImageMinAggregateOutputType | null
    _max: PropiedadImageMaxAggregateOutputType | null
  }

  export type PropiedadImageAvgAggregateOutputType = {
    id: number | null
  }

  export type PropiedadImageSumAggregateOutputType = {
    id: number | null
  }

  export type PropiedadImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    propiedadId: string | null
  }

  export type PropiedadImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    propiedadId: string | null
  }

  export type PropiedadImageCountAggregateOutputType = {
    id: number
    url: number
    propiedadId: number
    _all: number
  }


  export type PropiedadImageAvgAggregateInputType = {
    id?: true
  }

  export type PropiedadImageSumAggregateInputType = {
    id?: true
  }

  export type PropiedadImageMinAggregateInputType = {
    id?: true
    url?: true
    propiedadId?: true
  }

  export type PropiedadImageMaxAggregateInputType = {
    id?: true
    url?: true
    propiedadId?: true
  }

  export type PropiedadImageCountAggregateInputType = {
    id?: true
    url?: true
    propiedadId?: true
    _all?: true
  }

  export type PropiedadImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropiedadImage to aggregate.
     */
    where?: PropiedadImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropiedadImages to fetch.
     */
    orderBy?: PropiedadImageOrderByWithRelationInput | PropiedadImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropiedadImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropiedadImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropiedadImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropiedadImages
    **/
    _count?: true | PropiedadImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropiedadImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropiedadImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropiedadImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropiedadImageMaxAggregateInputType
  }

  export type GetPropiedadImageAggregateType<T extends PropiedadImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropiedadImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropiedadImage[P]>
      : GetScalarType<T[P], AggregatePropiedadImage[P]>
  }




  export type PropiedadImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropiedadImageWhereInput
    orderBy?: PropiedadImageOrderByWithAggregationInput | PropiedadImageOrderByWithAggregationInput[]
    by: PropiedadImageScalarFieldEnum[] | PropiedadImageScalarFieldEnum
    having?: PropiedadImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropiedadImageCountAggregateInputType | true
    _avg?: PropiedadImageAvgAggregateInputType
    _sum?: PropiedadImageSumAggregateInputType
    _min?: PropiedadImageMinAggregateInputType
    _max?: PropiedadImageMaxAggregateInputType
  }

  export type PropiedadImageGroupByOutputType = {
    id: number
    url: string
    propiedadId: string
    _count: PropiedadImageCountAggregateOutputType | null
    _avg: PropiedadImageAvgAggregateOutputType | null
    _sum: PropiedadImageSumAggregateOutputType | null
    _min: PropiedadImageMinAggregateOutputType | null
    _max: PropiedadImageMaxAggregateOutputType | null
  }

  type GetPropiedadImageGroupByPayload<T extends PropiedadImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropiedadImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropiedadImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropiedadImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropiedadImageGroupByOutputType[P]>
        }
      >
    >


  export type PropiedadImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    propiedadId?: boolean
    propiedad?: boolean | PropiedadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propiedadImage"]>

  export type PropiedadImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    propiedadId?: boolean
    propiedad?: boolean | PropiedadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propiedadImage"]>

  export type PropiedadImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    propiedadId?: boolean
    propiedad?: boolean | PropiedadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propiedadImage"]>

  export type PropiedadImageSelectScalar = {
    id?: boolean
    url?: boolean
    propiedadId?: boolean
  }

  export type PropiedadImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "propiedadId", ExtArgs["result"]["propiedadImage"]>
  export type PropiedadImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propiedad?: boolean | PropiedadDefaultArgs<ExtArgs>
  }
  export type PropiedadImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propiedad?: boolean | PropiedadDefaultArgs<ExtArgs>
  }
  export type PropiedadImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propiedad?: boolean | PropiedadDefaultArgs<ExtArgs>
  }

  export type $PropiedadImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropiedadImage"
    objects: {
      propiedad: Prisma.$PropiedadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      propiedadId: string
    }, ExtArgs["result"]["propiedadImage"]>
    composites: {}
  }

  type PropiedadImageGetPayload<S extends boolean | null | undefined | PropiedadImageDefaultArgs> = $Result.GetResult<Prisma.$PropiedadImagePayload, S>

  type PropiedadImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropiedadImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropiedadImageCountAggregateInputType | true
    }

  export interface PropiedadImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropiedadImage'], meta: { name: 'PropiedadImage' } }
    /**
     * Find zero or one PropiedadImage that matches the filter.
     * @param {PropiedadImageFindUniqueArgs} args - Arguments to find a PropiedadImage
     * @example
     * // Get one PropiedadImage
     * const propiedadImage = await prisma.propiedadImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropiedadImageFindUniqueArgs>(args: SelectSubset<T, PropiedadImageFindUniqueArgs<ExtArgs>>): Prisma__PropiedadImageClient<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropiedadImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropiedadImageFindUniqueOrThrowArgs} args - Arguments to find a PropiedadImage
     * @example
     * // Get one PropiedadImage
     * const propiedadImage = await prisma.propiedadImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropiedadImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropiedadImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropiedadImageClient<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropiedadImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadImageFindFirstArgs} args - Arguments to find a PropiedadImage
     * @example
     * // Get one PropiedadImage
     * const propiedadImage = await prisma.propiedadImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropiedadImageFindFirstArgs>(args?: SelectSubset<T, PropiedadImageFindFirstArgs<ExtArgs>>): Prisma__PropiedadImageClient<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropiedadImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadImageFindFirstOrThrowArgs} args - Arguments to find a PropiedadImage
     * @example
     * // Get one PropiedadImage
     * const propiedadImage = await prisma.propiedadImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropiedadImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropiedadImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropiedadImageClient<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropiedadImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropiedadImages
     * const propiedadImages = await prisma.propiedadImage.findMany()
     * 
     * // Get first 10 PropiedadImages
     * const propiedadImages = await prisma.propiedadImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propiedadImageWithIdOnly = await prisma.propiedadImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropiedadImageFindManyArgs>(args?: SelectSubset<T, PropiedadImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropiedadImage.
     * @param {PropiedadImageCreateArgs} args - Arguments to create a PropiedadImage.
     * @example
     * // Create one PropiedadImage
     * const PropiedadImage = await prisma.propiedadImage.create({
     *   data: {
     *     // ... data to create a PropiedadImage
     *   }
     * })
     * 
     */
    create<T extends PropiedadImageCreateArgs>(args: SelectSubset<T, PropiedadImageCreateArgs<ExtArgs>>): Prisma__PropiedadImageClient<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropiedadImages.
     * @param {PropiedadImageCreateManyArgs} args - Arguments to create many PropiedadImages.
     * @example
     * // Create many PropiedadImages
     * const propiedadImage = await prisma.propiedadImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropiedadImageCreateManyArgs>(args?: SelectSubset<T, PropiedadImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropiedadImages and returns the data saved in the database.
     * @param {PropiedadImageCreateManyAndReturnArgs} args - Arguments to create many PropiedadImages.
     * @example
     * // Create many PropiedadImages
     * const propiedadImage = await prisma.propiedadImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropiedadImages and only return the `id`
     * const propiedadImageWithIdOnly = await prisma.propiedadImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropiedadImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PropiedadImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropiedadImage.
     * @param {PropiedadImageDeleteArgs} args - Arguments to delete one PropiedadImage.
     * @example
     * // Delete one PropiedadImage
     * const PropiedadImage = await prisma.propiedadImage.delete({
     *   where: {
     *     // ... filter to delete one PropiedadImage
     *   }
     * })
     * 
     */
    delete<T extends PropiedadImageDeleteArgs>(args: SelectSubset<T, PropiedadImageDeleteArgs<ExtArgs>>): Prisma__PropiedadImageClient<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropiedadImage.
     * @param {PropiedadImageUpdateArgs} args - Arguments to update one PropiedadImage.
     * @example
     * // Update one PropiedadImage
     * const propiedadImage = await prisma.propiedadImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropiedadImageUpdateArgs>(args: SelectSubset<T, PropiedadImageUpdateArgs<ExtArgs>>): Prisma__PropiedadImageClient<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropiedadImages.
     * @param {PropiedadImageDeleteManyArgs} args - Arguments to filter PropiedadImages to delete.
     * @example
     * // Delete a few PropiedadImages
     * const { count } = await prisma.propiedadImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropiedadImageDeleteManyArgs>(args?: SelectSubset<T, PropiedadImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropiedadImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropiedadImages
     * const propiedadImage = await prisma.propiedadImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropiedadImageUpdateManyArgs>(args: SelectSubset<T, PropiedadImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropiedadImages and returns the data updated in the database.
     * @param {PropiedadImageUpdateManyAndReturnArgs} args - Arguments to update many PropiedadImages.
     * @example
     * // Update many PropiedadImages
     * const propiedadImage = await prisma.propiedadImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropiedadImages and only return the `id`
     * const propiedadImageWithIdOnly = await prisma.propiedadImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropiedadImageUpdateManyAndReturnArgs>(args: SelectSubset<T, PropiedadImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropiedadImage.
     * @param {PropiedadImageUpsertArgs} args - Arguments to update or create a PropiedadImage.
     * @example
     * // Update or create a PropiedadImage
     * const propiedadImage = await prisma.propiedadImage.upsert({
     *   create: {
     *     // ... data to create a PropiedadImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropiedadImage we want to update
     *   }
     * })
     */
    upsert<T extends PropiedadImageUpsertArgs>(args: SelectSubset<T, PropiedadImageUpsertArgs<ExtArgs>>): Prisma__PropiedadImageClient<$Result.GetResult<Prisma.$PropiedadImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropiedadImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadImageCountArgs} args - Arguments to filter PropiedadImages to count.
     * @example
     * // Count the number of PropiedadImages
     * const count = await prisma.propiedadImage.count({
     *   where: {
     *     // ... the filter for the PropiedadImages we want to count
     *   }
     * })
    **/
    count<T extends PropiedadImageCountArgs>(
      args?: Subset<T, PropiedadImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropiedadImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropiedadImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropiedadImageAggregateArgs>(args: Subset<T, PropiedadImageAggregateArgs>): Prisma.PrismaPromise<GetPropiedadImageAggregateType<T>>

    /**
     * Group by PropiedadImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropiedadImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropiedadImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropiedadImageGroupByArgs['orderBy'] }
        : { orderBy?: PropiedadImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropiedadImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropiedadImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropiedadImage model
   */
  readonly fields: PropiedadImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropiedadImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropiedadImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propiedad<T extends PropiedadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropiedadDefaultArgs<ExtArgs>>): Prisma__PropiedadClient<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropiedadImage model
   */
  interface PropiedadImageFieldRefs {
    readonly id: FieldRef<"PropiedadImage", 'Int'>
    readonly url: FieldRef<"PropiedadImage", 'String'>
    readonly propiedadId: FieldRef<"PropiedadImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PropiedadImage findUnique
   */
  export type PropiedadImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
    /**
     * Filter, which PropiedadImage to fetch.
     */
    where: PropiedadImageWhereUniqueInput
  }

  /**
   * PropiedadImage findUniqueOrThrow
   */
  export type PropiedadImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
    /**
     * Filter, which PropiedadImage to fetch.
     */
    where: PropiedadImageWhereUniqueInput
  }

  /**
   * PropiedadImage findFirst
   */
  export type PropiedadImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
    /**
     * Filter, which PropiedadImage to fetch.
     */
    where?: PropiedadImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropiedadImages to fetch.
     */
    orderBy?: PropiedadImageOrderByWithRelationInput | PropiedadImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropiedadImages.
     */
    cursor?: PropiedadImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropiedadImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropiedadImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropiedadImages.
     */
    distinct?: PropiedadImageScalarFieldEnum | PropiedadImageScalarFieldEnum[]
  }

  /**
   * PropiedadImage findFirstOrThrow
   */
  export type PropiedadImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
    /**
     * Filter, which PropiedadImage to fetch.
     */
    where?: PropiedadImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropiedadImages to fetch.
     */
    orderBy?: PropiedadImageOrderByWithRelationInput | PropiedadImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropiedadImages.
     */
    cursor?: PropiedadImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropiedadImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropiedadImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropiedadImages.
     */
    distinct?: PropiedadImageScalarFieldEnum | PropiedadImageScalarFieldEnum[]
  }

  /**
   * PropiedadImage findMany
   */
  export type PropiedadImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
    /**
     * Filter, which PropiedadImages to fetch.
     */
    where?: PropiedadImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropiedadImages to fetch.
     */
    orderBy?: PropiedadImageOrderByWithRelationInput | PropiedadImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropiedadImages.
     */
    cursor?: PropiedadImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropiedadImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropiedadImages.
     */
    skip?: number
    distinct?: PropiedadImageScalarFieldEnum | PropiedadImageScalarFieldEnum[]
  }

  /**
   * PropiedadImage create
   */
  export type PropiedadImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropiedadImage.
     */
    data: XOR<PropiedadImageCreateInput, PropiedadImageUncheckedCreateInput>
  }

  /**
   * PropiedadImage createMany
   */
  export type PropiedadImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropiedadImages.
     */
    data: PropiedadImageCreateManyInput | PropiedadImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropiedadImage createManyAndReturn
   */
  export type PropiedadImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * The data used to create many PropiedadImages.
     */
    data: PropiedadImageCreateManyInput | PropiedadImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropiedadImage update
   */
  export type PropiedadImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropiedadImage.
     */
    data: XOR<PropiedadImageUpdateInput, PropiedadImageUncheckedUpdateInput>
    /**
     * Choose, which PropiedadImage to update.
     */
    where: PropiedadImageWhereUniqueInput
  }

  /**
   * PropiedadImage updateMany
   */
  export type PropiedadImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropiedadImages.
     */
    data: XOR<PropiedadImageUpdateManyMutationInput, PropiedadImageUncheckedUpdateManyInput>
    /**
     * Filter which PropiedadImages to update
     */
    where?: PropiedadImageWhereInput
    /**
     * Limit how many PropiedadImages to update.
     */
    limit?: number
  }

  /**
   * PropiedadImage updateManyAndReturn
   */
  export type PropiedadImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * The data used to update PropiedadImages.
     */
    data: XOR<PropiedadImageUpdateManyMutationInput, PropiedadImageUncheckedUpdateManyInput>
    /**
     * Filter which PropiedadImages to update
     */
    where?: PropiedadImageWhereInput
    /**
     * Limit how many PropiedadImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropiedadImage upsert
   */
  export type PropiedadImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropiedadImage to update in case it exists.
     */
    where: PropiedadImageWhereUniqueInput
    /**
     * In case the PropiedadImage found by the `where` argument doesn't exist, create a new PropiedadImage with this data.
     */
    create: XOR<PropiedadImageCreateInput, PropiedadImageUncheckedCreateInput>
    /**
     * In case the PropiedadImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropiedadImageUpdateInput, PropiedadImageUncheckedUpdateInput>
  }

  /**
   * PropiedadImage delete
   */
  export type PropiedadImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
    /**
     * Filter which PropiedadImage to delete.
     */
    where: PropiedadImageWhereUniqueInput
  }

  /**
   * PropiedadImage deleteMany
   */
  export type PropiedadImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropiedadImages to delete
     */
    where?: PropiedadImageWhereInput
    /**
     * Limit how many PropiedadImages to delete.
     */
    limit?: number
  }

  /**
   * PropiedadImage without action
   */
  export type PropiedadImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropiedadImage
     */
    select?: PropiedadImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropiedadImage
     */
    omit?: PropiedadImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadImageInclude<ExtArgs> | null
  }


  /**
   * Model Contacto
   */

  export type AggregateContacto = {
    _count: ContactoCountAggregateOutputType | null
    _min: ContactoMinAggregateOutputType | null
    _max: ContactoMaxAggregateOutputType | null
  }

  export type ContactoMinAggregateOutputType = {
    id: string | null
    name: string | null
    telefono: string | null
    email: string | null
    mensaje: string | null
    fechaCreacion: Date | null
  }

  export type ContactoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    telefono: string | null
    email: string | null
    mensaje: string | null
    fechaCreacion: Date | null
  }

  export type ContactoCountAggregateOutputType = {
    id: number
    name: number
    telefono: number
    email: number
    mensaje: number
    fechaCreacion: number
    _all: number
  }


  export type ContactoMinAggregateInputType = {
    id?: true
    name?: true
    telefono?: true
    email?: true
    mensaje?: true
    fechaCreacion?: true
  }

  export type ContactoMaxAggregateInputType = {
    id?: true
    name?: true
    telefono?: true
    email?: true
    mensaje?: true
    fechaCreacion?: true
  }

  export type ContactoCountAggregateInputType = {
    id?: true
    name?: true
    telefono?: true
    email?: true
    mensaje?: true
    fechaCreacion?: true
    _all?: true
  }

  export type ContactoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacto to aggregate.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contactos
    **/
    _count?: true | ContactoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactoMaxAggregateInputType
  }

  export type GetContactoAggregateType<T extends ContactoAggregateArgs> = {
        [P in keyof T & keyof AggregateContacto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacto[P]>
      : GetScalarType<T[P], AggregateContacto[P]>
  }




  export type ContactoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactoWhereInput
    orderBy?: ContactoOrderByWithAggregationInput | ContactoOrderByWithAggregationInput[]
    by: ContactoScalarFieldEnum[] | ContactoScalarFieldEnum
    having?: ContactoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactoCountAggregateInputType | true
    _min?: ContactoMinAggregateInputType
    _max?: ContactoMaxAggregateInputType
  }

  export type ContactoGroupByOutputType = {
    id: string
    name: string | null
    telefono: string | null
    email: string
    mensaje: string | null
    fechaCreacion: Date
    _count: ContactoCountAggregateOutputType | null
    _min: ContactoMinAggregateOutputType | null
    _max: ContactoMaxAggregateOutputType | null
  }

  type GetContactoGroupByPayload<T extends ContactoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactoGroupByOutputType[P]>
        }
      >
    >


  export type ContactoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    telefono?: boolean
    email?: boolean
    mensaje?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type ContactoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    telefono?: boolean
    email?: boolean
    mensaje?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type ContactoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    telefono?: boolean
    email?: boolean
    mensaje?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type ContactoSelectScalar = {
    id?: boolean
    name?: boolean
    telefono?: boolean
    email?: boolean
    mensaje?: boolean
    fechaCreacion?: boolean
  }

  export type ContactoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "telefono" | "email" | "mensaje" | "fechaCreacion", ExtArgs["result"]["contacto"]>

  export type $ContactoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      telefono: string | null
      email: string
      mensaje: string | null
      fechaCreacion: Date
    }, ExtArgs["result"]["contacto"]>
    composites: {}
  }

  type ContactoGetPayload<S extends boolean | null | undefined | ContactoDefaultArgs> = $Result.GetResult<Prisma.$ContactoPayload, S>

  type ContactoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactoCountAggregateInputType | true
    }

  export interface ContactoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacto'], meta: { name: 'Contacto' } }
    /**
     * Find zero or one Contacto that matches the filter.
     * @param {ContactoFindUniqueArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactoFindUniqueArgs>(args: SelectSubset<T, ContactoFindUniqueArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactoFindUniqueOrThrowArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoFindFirstArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactoFindFirstArgs>(args?: SelectSubset<T, ContactoFindFirstArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoFindFirstOrThrowArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contactos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactos
     * const contactos = await prisma.contacto.findMany()
     * 
     * // Get first 10 Contactos
     * const contactos = await prisma.contacto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactoWithIdOnly = await prisma.contacto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactoFindManyArgs>(args?: SelectSubset<T, ContactoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacto.
     * @param {ContactoCreateArgs} args - Arguments to create a Contacto.
     * @example
     * // Create one Contacto
     * const Contacto = await prisma.contacto.create({
     *   data: {
     *     // ... data to create a Contacto
     *   }
     * })
     * 
     */
    create<T extends ContactoCreateArgs>(args: SelectSubset<T, ContactoCreateArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contactos.
     * @param {ContactoCreateManyArgs} args - Arguments to create many Contactos.
     * @example
     * // Create many Contactos
     * const contacto = await prisma.contacto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactoCreateManyArgs>(args?: SelectSubset<T, ContactoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contactos and returns the data saved in the database.
     * @param {ContactoCreateManyAndReturnArgs} args - Arguments to create many Contactos.
     * @example
     * // Create many Contactos
     * const contacto = await prisma.contacto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contactos and only return the `id`
     * const contactoWithIdOnly = await prisma.contacto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacto.
     * @param {ContactoDeleteArgs} args - Arguments to delete one Contacto.
     * @example
     * // Delete one Contacto
     * const Contacto = await prisma.contacto.delete({
     *   where: {
     *     // ... filter to delete one Contacto
     *   }
     * })
     * 
     */
    delete<T extends ContactoDeleteArgs>(args: SelectSubset<T, ContactoDeleteArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacto.
     * @param {ContactoUpdateArgs} args - Arguments to update one Contacto.
     * @example
     * // Update one Contacto
     * const contacto = await prisma.contacto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactoUpdateArgs>(args: SelectSubset<T, ContactoUpdateArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contactos.
     * @param {ContactoDeleteManyArgs} args - Arguments to filter Contactos to delete.
     * @example
     * // Delete a few Contactos
     * const { count } = await prisma.contacto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactoDeleteManyArgs>(args?: SelectSubset<T, ContactoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactos
     * const contacto = await prisma.contacto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactoUpdateManyArgs>(args: SelectSubset<T, ContactoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos and returns the data updated in the database.
     * @param {ContactoUpdateManyAndReturnArgs} args - Arguments to update many Contactos.
     * @example
     * // Update many Contactos
     * const contacto = await prisma.contacto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contactos and only return the `id`
     * const contactoWithIdOnly = await prisma.contacto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacto.
     * @param {ContactoUpsertArgs} args - Arguments to update or create a Contacto.
     * @example
     * // Update or create a Contacto
     * const contacto = await prisma.contacto.upsert({
     *   create: {
     *     // ... data to create a Contacto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacto we want to update
     *   }
     * })
     */
    upsert<T extends ContactoUpsertArgs>(args: SelectSubset<T, ContactoUpsertArgs<ExtArgs>>): Prisma__ContactoClient<$Result.GetResult<Prisma.$ContactoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoCountArgs} args - Arguments to filter Contactos to count.
     * @example
     * // Count the number of Contactos
     * const count = await prisma.contacto.count({
     *   where: {
     *     // ... the filter for the Contactos we want to count
     *   }
     * })
    **/
    count<T extends ContactoCountArgs>(
      args?: Subset<T, ContactoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactoAggregateArgs>(args: Subset<T, ContactoAggregateArgs>): Prisma.PrismaPromise<GetContactoAggregateType<T>>

    /**
     * Group by Contacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactoGroupByArgs['orderBy'] }
        : { orderBy?: ContactoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacto model
   */
  readonly fields: ContactoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contacto model
   */
  interface ContactoFieldRefs {
    readonly id: FieldRef<"Contacto", 'String'>
    readonly name: FieldRef<"Contacto", 'String'>
    readonly telefono: FieldRef<"Contacto", 'String'>
    readonly email: FieldRef<"Contacto", 'String'>
    readonly mensaje: FieldRef<"Contacto", 'String'>
    readonly fechaCreacion: FieldRef<"Contacto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contacto findUnique
   */
  export type ContactoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto findUniqueOrThrow
   */
  export type ContactoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto findFirst
   */
  export type ContactoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactos.
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactos.
     */
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * Contacto findFirstOrThrow
   */
  export type ContactoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contacto to fetch.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contactos.
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contactos.
     */
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * Contacto findMany
   */
  export type ContactoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter, which Contactos to fetch.
     */
    where?: ContactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contactos to fetch.
     */
    orderBy?: ContactoOrderByWithRelationInput | ContactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contactos.
     */
    cursor?: ContactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contactos.
     */
    skip?: number
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * Contacto create
   */
  export type ContactoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data needed to create a Contacto.
     */
    data: XOR<ContactoCreateInput, ContactoUncheckedCreateInput>
  }

  /**
   * Contacto createMany
   */
  export type ContactoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contactos.
     */
    data: ContactoCreateManyInput | ContactoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacto createManyAndReturn
   */
  export type ContactoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data used to create many Contactos.
     */
    data: ContactoCreateManyInput | ContactoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacto update
   */
  export type ContactoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data needed to update a Contacto.
     */
    data: XOR<ContactoUpdateInput, ContactoUncheckedUpdateInput>
    /**
     * Choose, which Contacto to update.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto updateMany
   */
  export type ContactoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contactos.
     */
    data: XOR<ContactoUpdateManyMutationInput, ContactoUncheckedUpdateManyInput>
    /**
     * Filter which Contactos to update
     */
    where?: ContactoWhereInput
    /**
     * Limit how many Contactos to update.
     */
    limit?: number
  }

  /**
   * Contacto updateManyAndReturn
   */
  export type ContactoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The data used to update Contactos.
     */
    data: XOR<ContactoUpdateManyMutationInput, ContactoUncheckedUpdateManyInput>
    /**
     * Filter which Contactos to update
     */
    where?: ContactoWhereInput
    /**
     * Limit how many Contactos to update.
     */
    limit?: number
  }

  /**
   * Contacto upsert
   */
  export type ContactoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * The filter to search for the Contacto to update in case it exists.
     */
    where: ContactoWhereUniqueInput
    /**
     * In case the Contacto found by the `where` argument doesn't exist, create a new Contacto with this data.
     */
    create: XOR<ContactoCreateInput, ContactoUncheckedCreateInput>
    /**
     * In case the Contacto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactoUpdateInput, ContactoUncheckedUpdateInput>
  }

  /**
   * Contacto delete
   */
  export type ContactoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
    /**
     * Filter which Contacto to delete.
     */
    where: ContactoWhereUniqueInput
  }

  /**
   * Contacto deleteMany
   */
  export type ContactoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contactos to delete
     */
    where?: ContactoWhereInput
    /**
     * Limit how many Contactos to delete.
     */
    limit?: number
  }

  /**
   * Contacto without action
   */
  export type ContactoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacto
     */
    select?: ContactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacto
     */
    omit?: ContactoOmit<ExtArgs> | null
  }


  /**
   * Model Ciudad
   */

  export type AggregateCiudad = {
    _count: CiudadCountAggregateOutputType | null
    _min: CiudadMinAggregateOutputType | null
    _max: CiudadMaxAggregateOutputType | null
  }

  export type CiudadMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    url: string | null
  }

  export type CiudadMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    url: string | null
  }

  export type CiudadCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    url: number
    _all: number
  }


  export type CiudadMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    url?: true
  }

  export type CiudadMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    url?: true
  }

  export type CiudadCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    url?: true
    _all?: true
  }

  export type CiudadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciudad to aggregate.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ciudads
    **/
    _count?: true | CiudadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CiudadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CiudadMaxAggregateInputType
  }

  export type GetCiudadAggregateType<T extends CiudadAggregateArgs> = {
        [P in keyof T & keyof AggregateCiudad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCiudad[P]>
      : GetScalarType<T[P], AggregateCiudad[P]>
  }




  export type CiudadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CiudadWhereInput
    orderBy?: CiudadOrderByWithAggregationInput | CiudadOrderByWithAggregationInput[]
    by: CiudadScalarFieldEnum[] | CiudadScalarFieldEnum
    having?: CiudadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CiudadCountAggregateInputType | true
    _min?: CiudadMinAggregateInputType
    _max?: CiudadMaxAggregateInputType
  }

  export type CiudadGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    url: string | null
    _count: CiudadCountAggregateOutputType | null
    _min: CiudadMinAggregateOutputType | null
    _max: CiudadMaxAggregateOutputType | null
  }

  type GetCiudadGroupByPayload<T extends CiudadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CiudadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CiudadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CiudadGroupByOutputType[P]>
            : GetScalarType<T[P], CiudadGroupByOutputType[P]>
        }
      >
    >


  export type CiudadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    url?: boolean
    servicios?: boolean | Ciudad$serviciosArgs<ExtArgs>
    propiedades?: boolean | Ciudad$propiedadesArgs<ExtArgs>
    _count?: boolean | CiudadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciudad"]>

  export type CiudadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    url?: boolean
  }, ExtArgs["result"]["ciudad"]>

  export type CiudadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    url?: boolean
  }, ExtArgs["result"]["ciudad"]>

  export type CiudadSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    url?: boolean
  }

  export type CiudadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "url", ExtArgs["result"]["ciudad"]>
  export type CiudadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicios?: boolean | Ciudad$serviciosArgs<ExtArgs>
    propiedades?: boolean | Ciudad$propiedadesArgs<ExtArgs>
    _count?: boolean | CiudadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CiudadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CiudadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CiudadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ciudad"
    objects: {
      servicios: Prisma.$ServicioPayload<ExtArgs>[]
      propiedades: Prisma.$PropiedadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
      url: string | null
    }, ExtArgs["result"]["ciudad"]>
    composites: {}
  }

  type CiudadGetPayload<S extends boolean | null | undefined | CiudadDefaultArgs> = $Result.GetResult<Prisma.$CiudadPayload, S>

  type CiudadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CiudadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CiudadCountAggregateInputType | true
    }

  export interface CiudadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ciudad'], meta: { name: 'Ciudad' } }
    /**
     * Find zero or one Ciudad that matches the filter.
     * @param {CiudadFindUniqueArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CiudadFindUniqueArgs>(args: SelectSubset<T, CiudadFindUniqueArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ciudad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CiudadFindUniqueOrThrowArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CiudadFindUniqueOrThrowArgs>(args: SelectSubset<T, CiudadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindFirstArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CiudadFindFirstArgs>(args?: SelectSubset<T, CiudadFindFirstArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindFirstOrThrowArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CiudadFindFirstOrThrowArgs>(args?: SelectSubset<T, CiudadFindFirstOrThrowArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ciudads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ciudads
     * const ciudads = await prisma.ciudad.findMany()
     * 
     * // Get first 10 Ciudads
     * const ciudads = await prisma.ciudad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CiudadFindManyArgs>(args?: SelectSubset<T, CiudadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ciudad.
     * @param {CiudadCreateArgs} args - Arguments to create a Ciudad.
     * @example
     * // Create one Ciudad
     * const Ciudad = await prisma.ciudad.create({
     *   data: {
     *     // ... data to create a Ciudad
     *   }
     * })
     * 
     */
    create<T extends CiudadCreateArgs>(args: SelectSubset<T, CiudadCreateArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ciudads.
     * @param {CiudadCreateManyArgs} args - Arguments to create many Ciudads.
     * @example
     * // Create many Ciudads
     * const ciudad = await prisma.ciudad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CiudadCreateManyArgs>(args?: SelectSubset<T, CiudadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ciudads and returns the data saved in the database.
     * @param {CiudadCreateManyAndReturnArgs} args - Arguments to create many Ciudads.
     * @example
     * // Create many Ciudads
     * const ciudad = await prisma.ciudad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ciudads and only return the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CiudadCreateManyAndReturnArgs>(args?: SelectSubset<T, CiudadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ciudad.
     * @param {CiudadDeleteArgs} args - Arguments to delete one Ciudad.
     * @example
     * // Delete one Ciudad
     * const Ciudad = await prisma.ciudad.delete({
     *   where: {
     *     // ... filter to delete one Ciudad
     *   }
     * })
     * 
     */
    delete<T extends CiudadDeleteArgs>(args: SelectSubset<T, CiudadDeleteArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ciudad.
     * @param {CiudadUpdateArgs} args - Arguments to update one Ciudad.
     * @example
     * // Update one Ciudad
     * const ciudad = await prisma.ciudad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CiudadUpdateArgs>(args: SelectSubset<T, CiudadUpdateArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ciudads.
     * @param {CiudadDeleteManyArgs} args - Arguments to filter Ciudads to delete.
     * @example
     * // Delete a few Ciudads
     * const { count } = await prisma.ciudad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CiudadDeleteManyArgs>(args?: SelectSubset<T, CiudadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ciudads
     * const ciudad = await prisma.ciudad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CiudadUpdateManyArgs>(args: SelectSubset<T, CiudadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudads and returns the data updated in the database.
     * @param {CiudadUpdateManyAndReturnArgs} args - Arguments to update many Ciudads.
     * @example
     * // Update many Ciudads
     * const ciudad = await prisma.ciudad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ciudads and only return the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CiudadUpdateManyAndReturnArgs>(args: SelectSubset<T, CiudadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ciudad.
     * @param {CiudadUpsertArgs} args - Arguments to update or create a Ciudad.
     * @example
     * // Update or create a Ciudad
     * const ciudad = await prisma.ciudad.upsert({
     *   create: {
     *     // ... data to create a Ciudad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ciudad we want to update
     *   }
     * })
     */
    upsert<T extends CiudadUpsertArgs>(args: SelectSubset<T, CiudadUpsertArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ciudads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadCountArgs} args - Arguments to filter Ciudads to count.
     * @example
     * // Count the number of Ciudads
     * const count = await prisma.ciudad.count({
     *   where: {
     *     // ... the filter for the Ciudads we want to count
     *   }
     * })
    **/
    count<T extends CiudadCountArgs>(
      args?: Subset<T, CiudadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CiudadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ciudad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CiudadAggregateArgs>(args: Subset<T, CiudadAggregateArgs>): Prisma.PrismaPromise<GetCiudadAggregateType<T>>

    /**
     * Group by Ciudad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CiudadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CiudadGroupByArgs['orderBy'] }
        : { orderBy?: CiudadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CiudadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCiudadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ciudad model
   */
  readonly fields: CiudadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ciudad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CiudadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicios<T extends Ciudad$serviciosArgs<ExtArgs> = {}>(args?: Subset<T, Ciudad$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propiedades<T extends Ciudad$propiedadesArgs<ExtArgs> = {}>(args?: Subset<T, Ciudad$propiedadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ciudad model
   */
  interface CiudadFieldRefs {
    readonly id: FieldRef<"Ciudad", 'String'>
    readonly nombre: FieldRef<"Ciudad", 'String'>
    readonly descripcion: FieldRef<"Ciudad", 'String'>
    readonly url: FieldRef<"Ciudad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ciudad findUnique
   */
  export type CiudadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad findUniqueOrThrow
   */
  export type CiudadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad findFirst
   */
  export type CiudadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad findFirstOrThrow
   */
  export type CiudadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad findMany
   */
  export type CiudadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudads to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad create
   */
  export type CiudadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The data needed to create a Ciudad.
     */
    data: XOR<CiudadCreateInput, CiudadUncheckedCreateInput>
  }

  /**
   * Ciudad createMany
   */
  export type CiudadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ciudads.
     */
    data: CiudadCreateManyInput | CiudadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ciudad createManyAndReturn
   */
  export type CiudadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * The data used to create many Ciudads.
     */
    data: CiudadCreateManyInput | CiudadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ciudad update
   */
  export type CiudadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The data needed to update a Ciudad.
     */
    data: XOR<CiudadUpdateInput, CiudadUncheckedUpdateInput>
    /**
     * Choose, which Ciudad to update.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad updateMany
   */
  export type CiudadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ciudads.
     */
    data: XOR<CiudadUpdateManyMutationInput, CiudadUncheckedUpdateManyInput>
    /**
     * Filter which Ciudads to update
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to update.
     */
    limit?: number
  }

  /**
   * Ciudad updateManyAndReturn
   */
  export type CiudadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * The data used to update Ciudads.
     */
    data: XOR<CiudadUpdateManyMutationInput, CiudadUncheckedUpdateManyInput>
    /**
     * Filter which Ciudads to update
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to update.
     */
    limit?: number
  }

  /**
   * Ciudad upsert
   */
  export type CiudadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The filter to search for the Ciudad to update in case it exists.
     */
    where: CiudadWhereUniqueInput
    /**
     * In case the Ciudad found by the `where` argument doesn't exist, create a new Ciudad with this data.
     */
    create: XOR<CiudadCreateInput, CiudadUncheckedCreateInput>
    /**
     * In case the Ciudad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CiudadUpdateInput, CiudadUncheckedUpdateInput>
  }

  /**
   * Ciudad delete
   */
  export type CiudadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter which Ciudad to delete.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad deleteMany
   */
  export type CiudadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciudads to delete
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to delete.
     */
    limit?: number
  }

  /**
   * Ciudad.servicios
   */
  export type Ciudad$serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    cursor?: ServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Ciudad.propiedades
   */
  export type Ciudad$propiedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    where?: PropiedadWhereInput
    orderBy?: PropiedadOrderByWithRelationInput | PropiedadOrderByWithRelationInput[]
    cursor?: PropiedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropiedadScalarFieldEnum | PropiedadScalarFieldEnum[]
  }

  /**
   * Ciudad without action
   */
  export type CiudadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
  }


  /**
   * Model Servicio
   */

  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    ciudadId: string | null
  }

  export type ServicioMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    ciudadId: string | null
  }

  export type ServicioCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    ciudadId: number
    _all: number
  }


  export type ServicioMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    ciudadId?: true
  }

  export type ServicioMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    ciudadId?: true
  }

  export type ServicioCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    ciudadId?: true
    _all?: true
  }

  export type ServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicio to aggregate.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type ServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithAggregationInput | ServicioOrderByWithAggregationInput[]
    by: ServicioScalarFieldEnum[] | ServicioScalarFieldEnum
    having?: ServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }

  export type ServicioGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    ciudadId: string
    _count: ServicioCountAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type ServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ciudadId?: boolean
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    images?: boolean | Servicio$imagesArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ciudadId?: boolean
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ciudadId?: boolean
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    ciudadId?: boolean
  }

  export type ServicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "ciudadId", ExtArgs["result"]["servicio"]>
  export type ServicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    images?: boolean | Servicio$imagesArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
  }
  export type ServicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
  }

  export type $ServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servicio"
    objects: {
      ciudad: Prisma.$CiudadPayload<ExtArgs>
      images: Prisma.$ServicioImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
      ciudadId: string
    }, ExtArgs["result"]["servicio"]>
    composites: {}
  }

  type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = $Result.GetResult<Prisma.$ServicioPayload, S>

  type ServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface ServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicio'], meta: { name: 'Servicio' } }
    /**
     * Find zero or one Servicio that matches the filter.
     * @param {ServicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioFindUniqueArgs>(args: SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioFindFirstArgs>(args?: SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioWithIdOnly = await prisma.servicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioFindManyArgs>(args?: SelectSubset<T, ServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicio.
     * @param {ServicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
     */
    create<T extends ServicioCreateArgs>(args: SelectSubset<T, ServicioCreateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicios.
     * @param {ServicioCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioCreateManyArgs>(args?: SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicios and returns the data saved in the database.
     * @param {ServicioCreateManyAndReturnArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicios and only return the `id`
     * const servicioWithIdOnly = await prisma.servicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicioCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicio.
     * @param {ServicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
     */
    delete<T extends ServicioDeleteArgs>(args: SelectSubset<T, ServicioDeleteArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicio.
     * @param {ServicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioUpdateArgs>(args: SelectSubset<T, ServicioUpdateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicios.
     * @param {ServicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioDeleteManyArgs>(args?: SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioUpdateManyArgs>(args: SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios and returns the data updated in the database.
     * @param {ServicioUpdateManyAndReturnArgs} args - Arguments to update many Servicios.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicios and only return the `id`
     * const servicioWithIdOnly = await prisma.servicio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicioUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicio.
     * @param {ServicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
     */
    upsert<T extends ServicioUpsertArgs>(args: SelectSubset<T, ServicioUpsertArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends ServicioCountArgs>(
      args?: Subset<T, ServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioGroupByArgs['orderBy'] }
        : { orderBy?: ServicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicio model
   */
  readonly fields: ServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ciudad<T extends CiudadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CiudadDefaultArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Servicio$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servicio model
   */
  interface ServicioFieldRefs {
    readonly id: FieldRef<"Servicio", 'String'>
    readonly nombre: FieldRef<"Servicio", 'String'>
    readonly descripcion: FieldRef<"Servicio", 'String'>
    readonly ciudadId: FieldRef<"Servicio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Servicio findUnique
   */
  export type ServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findUniqueOrThrow
   */
  export type ServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findFirst
   */
  export type ServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findFirstOrThrow
   */
  export type ServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findMany
   */
  export type ServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicios to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio create
   */
  export type ServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicio.
     */
    data: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
  }

  /**
   * Servicio createMany
   */
  export type ServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio createManyAndReturn
   */
  export type ServicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servicio update
   */
  export type ServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicio.
     */
    data: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
    /**
     * Choose, which Servicio to update.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio updateMany
   */
  export type ServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio updateManyAndReturn
   */
  export type ServicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servicio upsert
   */
  export type ServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicio to update in case it exists.
     */
    where: ServicioWhereUniqueInput
    /**
     * In case the Servicio found by the `where` argument doesn't exist, create a new Servicio with this data.
     */
    create: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
    /**
     * In case the Servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
  }

  /**
   * Servicio delete
   */
  export type ServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter which Servicio to delete.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio deleteMany
   */
  export type ServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicios to delete
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to delete.
     */
    limit?: number
  }

  /**
   * Servicio.images
   */
  export type Servicio$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
    where?: ServicioImageWhereInput
    orderBy?: ServicioImageOrderByWithRelationInput | ServicioImageOrderByWithRelationInput[]
    cursor?: ServicioImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioImageScalarFieldEnum | ServicioImageScalarFieldEnum[]
  }

  /**
   * Servicio without action
   */
  export type ServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
  }


  /**
   * Model ServicioImage
   */

  export type AggregateServicioImage = {
    _count: ServicioImageCountAggregateOutputType | null
    _avg: ServicioImageAvgAggregateOutputType | null
    _sum: ServicioImageSumAggregateOutputType | null
    _min: ServicioImageMinAggregateOutputType | null
    _max: ServicioImageMaxAggregateOutputType | null
  }

  export type ServicioImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ServicioImageSumAggregateOutputType = {
    id: number | null
  }

  export type ServicioImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    servicioId: string | null
  }

  export type ServicioImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    servicioId: string | null
  }

  export type ServicioImageCountAggregateOutputType = {
    id: number
    url: number
    servicioId: number
    _all: number
  }


  export type ServicioImageAvgAggregateInputType = {
    id?: true
  }

  export type ServicioImageSumAggregateInputType = {
    id?: true
  }

  export type ServicioImageMinAggregateInputType = {
    id?: true
    url?: true
    servicioId?: true
  }

  export type ServicioImageMaxAggregateInputType = {
    id?: true
    url?: true
    servicioId?: true
  }

  export type ServicioImageCountAggregateInputType = {
    id?: true
    url?: true
    servicioId?: true
    _all?: true
  }

  export type ServicioImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicioImage to aggregate.
     */
    where?: ServicioImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioImages to fetch.
     */
    orderBy?: ServicioImageOrderByWithRelationInput | ServicioImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicioImages
    **/
    _count?: true | ServicioImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioImageMaxAggregateInputType
  }

  export type GetServicioImageAggregateType<T extends ServicioImageAggregateArgs> = {
        [P in keyof T & keyof AggregateServicioImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicioImage[P]>
      : GetScalarType<T[P], AggregateServicioImage[P]>
  }




  export type ServicioImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioImageWhereInput
    orderBy?: ServicioImageOrderByWithAggregationInput | ServicioImageOrderByWithAggregationInput[]
    by: ServicioImageScalarFieldEnum[] | ServicioImageScalarFieldEnum
    having?: ServicioImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioImageCountAggregateInputType | true
    _avg?: ServicioImageAvgAggregateInputType
    _sum?: ServicioImageSumAggregateInputType
    _min?: ServicioImageMinAggregateInputType
    _max?: ServicioImageMaxAggregateInputType
  }

  export type ServicioImageGroupByOutputType = {
    id: number
    url: string
    servicioId: string
    _count: ServicioImageCountAggregateOutputType | null
    _avg: ServicioImageAvgAggregateOutputType | null
    _sum: ServicioImageSumAggregateOutputType | null
    _min: ServicioImageMinAggregateOutputType | null
    _max: ServicioImageMaxAggregateOutputType | null
  }

  type GetServicioImageGroupByPayload<T extends ServicioImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioImageGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioImageGroupByOutputType[P]>
        }
      >
    >


  export type ServicioImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    servicioId?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicioImage"]>

  export type ServicioImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    servicioId?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicioImage"]>

  export type ServicioImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    servicioId?: boolean
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicioImage"]>

  export type ServicioImageSelectScalar = {
    id?: boolean
    url?: boolean
    servicioId?: boolean
  }

  export type ServicioImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "servicioId", ExtArgs["result"]["servicioImage"]>
  export type ServicioImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type ServicioImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type ServicioImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }

  export type $ServicioImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicioImage"
    objects: {
      servicio: Prisma.$ServicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      servicioId: string
    }, ExtArgs["result"]["servicioImage"]>
    composites: {}
  }

  type ServicioImageGetPayload<S extends boolean | null | undefined | ServicioImageDefaultArgs> = $Result.GetResult<Prisma.$ServicioImagePayload, S>

  type ServicioImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioImageCountAggregateInputType | true
    }

  export interface ServicioImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicioImage'], meta: { name: 'ServicioImage' } }
    /**
     * Find zero or one ServicioImage that matches the filter.
     * @param {ServicioImageFindUniqueArgs} args - Arguments to find a ServicioImage
     * @example
     * // Get one ServicioImage
     * const servicioImage = await prisma.servicioImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioImageFindUniqueArgs>(args: SelectSubset<T, ServicioImageFindUniqueArgs<ExtArgs>>): Prisma__ServicioImageClient<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicioImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioImageFindUniqueOrThrowArgs} args - Arguments to find a ServicioImage
     * @example
     * // Get one ServicioImage
     * const servicioImage = await prisma.servicioImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioImageClient<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicioImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioImageFindFirstArgs} args - Arguments to find a ServicioImage
     * @example
     * // Get one ServicioImage
     * const servicioImage = await prisma.servicioImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioImageFindFirstArgs>(args?: SelectSubset<T, ServicioImageFindFirstArgs<ExtArgs>>): Prisma__ServicioImageClient<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicioImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioImageFindFirstOrThrowArgs} args - Arguments to find a ServicioImage
     * @example
     * // Get one ServicioImage
     * const servicioImage = await prisma.servicioImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioImageClient<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicioImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicioImages
     * const servicioImages = await prisma.servicioImage.findMany()
     * 
     * // Get first 10 ServicioImages
     * const servicioImages = await prisma.servicioImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioImageWithIdOnly = await prisma.servicioImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioImageFindManyArgs>(args?: SelectSubset<T, ServicioImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicioImage.
     * @param {ServicioImageCreateArgs} args - Arguments to create a ServicioImage.
     * @example
     * // Create one ServicioImage
     * const ServicioImage = await prisma.servicioImage.create({
     *   data: {
     *     // ... data to create a ServicioImage
     *   }
     * })
     * 
     */
    create<T extends ServicioImageCreateArgs>(args: SelectSubset<T, ServicioImageCreateArgs<ExtArgs>>): Prisma__ServicioImageClient<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicioImages.
     * @param {ServicioImageCreateManyArgs} args - Arguments to create many ServicioImages.
     * @example
     * // Create many ServicioImages
     * const servicioImage = await prisma.servicioImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioImageCreateManyArgs>(args?: SelectSubset<T, ServicioImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicioImages and returns the data saved in the database.
     * @param {ServicioImageCreateManyAndReturnArgs} args - Arguments to create many ServicioImages.
     * @example
     * // Create many ServicioImages
     * const servicioImage = await prisma.servicioImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicioImages and only return the `id`
     * const servicioImageWithIdOnly = await prisma.servicioImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicioImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicioImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServicioImage.
     * @param {ServicioImageDeleteArgs} args - Arguments to delete one ServicioImage.
     * @example
     * // Delete one ServicioImage
     * const ServicioImage = await prisma.servicioImage.delete({
     *   where: {
     *     // ... filter to delete one ServicioImage
     *   }
     * })
     * 
     */
    delete<T extends ServicioImageDeleteArgs>(args: SelectSubset<T, ServicioImageDeleteArgs<ExtArgs>>): Prisma__ServicioImageClient<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicioImage.
     * @param {ServicioImageUpdateArgs} args - Arguments to update one ServicioImage.
     * @example
     * // Update one ServicioImage
     * const servicioImage = await prisma.servicioImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioImageUpdateArgs>(args: SelectSubset<T, ServicioImageUpdateArgs<ExtArgs>>): Prisma__ServicioImageClient<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicioImages.
     * @param {ServicioImageDeleteManyArgs} args - Arguments to filter ServicioImages to delete.
     * @example
     * // Delete a few ServicioImages
     * const { count } = await prisma.servicioImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioImageDeleteManyArgs>(args?: SelectSubset<T, ServicioImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicioImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicioImages
     * const servicioImage = await prisma.servicioImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioImageUpdateManyArgs>(args: SelectSubset<T, ServicioImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicioImages and returns the data updated in the database.
     * @param {ServicioImageUpdateManyAndReturnArgs} args - Arguments to update many ServicioImages.
     * @example
     * // Update many ServicioImages
     * const servicioImage = await prisma.servicioImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServicioImages and only return the `id`
     * const servicioImageWithIdOnly = await prisma.servicioImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicioImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicioImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServicioImage.
     * @param {ServicioImageUpsertArgs} args - Arguments to update or create a ServicioImage.
     * @example
     * // Update or create a ServicioImage
     * const servicioImage = await prisma.servicioImage.upsert({
     *   create: {
     *     // ... data to create a ServicioImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicioImage we want to update
     *   }
     * })
     */
    upsert<T extends ServicioImageUpsertArgs>(args: SelectSubset<T, ServicioImageUpsertArgs<ExtArgs>>): Prisma__ServicioImageClient<$Result.GetResult<Prisma.$ServicioImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicioImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioImageCountArgs} args - Arguments to filter ServicioImages to count.
     * @example
     * // Count the number of ServicioImages
     * const count = await prisma.servicioImage.count({
     *   where: {
     *     // ... the filter for the ServicioImages we want to count
     *   }
     * })
    **/
    count<T extends ServicioImageCountArgs>(
      args?: Subset<T, ServicioImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicioImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicioImageAggregateArgs>(args: Subset<T, ServicioImageAggregateArgs>): Prisma.PrismaPromise<GetServicioImageAggregateType<T>>

    /**
     * Group by ServicioImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicioImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioImageGroupByArgs['orderBy'] }
        : { orderBy?: ServicioImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicioImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicioImage model
   */
  readonly fields: ServicioImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicioImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicio<T extends ServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioDefaultArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServicioImage model
   */
  interface ServicioImageFieldRefs {
    readonly id: FieldRef<"ServicioImage", 'Int'>
    readonly url: FieldRef<"ServicioImage", 'String'>
    readonly servicioId: FieldRef<"ServicioImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServicioImage findUnique
   */
  export type ServicioImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
    /**
     * Filter, which ServicioImage to fetch.
     */
    where: ServicioImageWhereUniqueInput
  }

  /**
   * ServicioImage findUniqueOrThrow
   */
  export type ServicioImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
    /**
     * Filter, which ServicioImage to fetch.
     */
    where: ServicioImageWhereUniqueInput
  }

  /**
   * ServicioImage findFirst
   */
  export type ServicioImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
    /**
     * Filter, which ServicioImage to fetch.
     */
    where?: ServicioImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioImages to fetch.
     */
    orderBy?: ServicioImageOrderByWithRelationInput | ServicioImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicioImages.
     */
    cursor?: ServicioImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioImages.
     */
    distinct?: ServicioImageScalarFieldEnum | ServicioImageScalarFieldEnum[]
  }

  /**
   * ServicioImage findFirstOrThrow
   */
  export type ServicioImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
    /**
     * Filter, which ServicioImage to fetch.
     */
    where?: ServicioImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioImages to fetch.
     */
    orderBy?: ServicioImageOrderByWithRelationInput | ServicioImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicioImages.
     */
    cursor?: ServicioImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioImages.
     */
    distinct?: ServicioImageScalarFieldEnum | ServicioImageScalarFieldEnum[]
  }

  /**
   * ServicioImage findMany
   */
  export type ServicioImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
    /**
     * Filter, which ServicioImages to fetch.
     */
    where?: ServicioImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioImages to fetch.
     */
    orderBy?: ServicioImageOrderByWithRelationInput | ServicioImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicioImages.
     */
    cursor?: ServicioImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioImages.
     */
    skip?: number
    distinct?: ServicioImageScalarFieldEnum | ServicioImageScalarFieldEnum[]
  }

  /**
   * ServicioImage create
   */
  export type ServicioImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicioImage.
     */
    data: XOR<ServicioImageCreateInput, ServicioImageUncheckedCreateInput>
  }

  /**
   * ServicioImage createMany
   */
  export type ServicioImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicioImages.
     */
    data: ServicioImageCreateManyInput | ServicioImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicioImage createManyAndReturn
   */
  export type ServicioImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * The data used to create many ServicioImages.
     */
    data: ServicioImageCreateManyInput | ServicioImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicioImage update
   */
  export type ServicioImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicioImage.
     */
    data: XOR<ServicioImageUpdateInput, ServicioImageUncheckedUpdateInput>
    /**
     * Choose, which ServicioImage to update.
     */
    where: ServicioImageWhereUniqueInput
  }

  /**
   * ServicioImage updateMany
   */
  export type ServicioImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicioImages.
     */
    data: XOR<ServicioImageUpdateManyMutationInput, ServicioImageUncheckedUpdateManyInput>
    /**
     * Filter which ServicioImages to update
     */
    where?: ServicioImageWhereInput
    /**
     * Limit how many ServicioImages to update.
     */
    limit?: number
  }

  /**
   * ServicioImage updateManyAndReturn
   */
  export type ServicioImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * The data used to update ServicioImages.
     */
    data: XOR<ServicioImageUpdateManyMutationInput, ServicioImageUncheckedUpdateManyInput>
    /**
     * Filter which ServicioImages to update
     */
    where?: ServicioImageWhereInput
    /**
     * Limit how many ServicioImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicioImage upsert
   */
  export type ServicioImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicioImage to update in case it exists.
     */
    where: ServicioImageWhereUniqueInput
    /**
     * In case the ServicioImage found by the `where` argument doesn't exist, create a new ServicioImage with this data.
     */
    create: XOR<ServicioImageCreateInput, ServicioImageUncheckedCreateInput>
    /**
     * In case the ServicioImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioImageUpdateInput, ServicioImageUncheckedUpdateInput>
  }

  /**
   * ServicioImage delete
   */
  export type ServicioImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
    /**
     * Filter which ServicioImage to delete.
     */
    where: ServicioImageWhereUniqueInput
  }

  /**
   * ServicioImage deleteMany
   */
  export type ServicioImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicioImages to delete
     */
    where?: ServicioImageWhereInput
    /**
     * Limit how many ServicioImages to delete.
     */
    limit?: number
  }

  /**
   * ServicioImage without action
   */
  export type ServicioImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioImage
     */
    select?: ServicioImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioImage
     */
    omit?: ServicioImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioImageInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    refresh_token_expires_in: number | null
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    refresh_token_expires_in: number | null
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    refresh_token_expires_in: number | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    contactoId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    refresh_token_expires_in: number | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    contactoId: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    refresh_token_expires_in: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    contactoId: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    refresh_token_expires_in?: true
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    refresh_token_expires_in?: true
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    refresh_token_expires_in?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    contactoId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    refresh_token_expires_in?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    contactoId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    refresh_token_expires_in?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    contactoId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    refresh_token_expires_in: number | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    contactoId: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    refresh_token_expires_in?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    contactoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    refresh_token_expires_in?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    contactoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    refresh_token_expires_in?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    contactoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    refresh_token_expires_in?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    contactoId?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "refresh_token_expires_in" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "contactoId", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      refresh_token_expires_in: number | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      contactoId: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly contactoId: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    contactoId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    contactoId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    contactoId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    contactoId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    contactoId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    contactoId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    contactoId: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    contactoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    contactoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    contactoId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    contactoId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires" | "contactoId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
      contactoId: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly contactoId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    role: string | null
    isActive: boolean | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    password: string | null
    email: string | null
    role: string | null
    isActive: boolean | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    email: number
    role: number
    isActive: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    role?: true
    isActive?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    role?: true
    isActive?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    email?: true
    role?: true
    isActive?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    password: string | null
    email: string
    role: string
    isActive: boolean
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    propiedades?: boolean | User$propiedadesArgs<ExtArgs>
    favoritos?: boolean | User$favoritosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "email" | "role" | "isActive" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    propiedades?: boolean | User$propiedadesArgs<ExtArgs>
    favoritos?: boolean | User$favoritosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      propiedades: Prisma.$PropiedadPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      password: string | null
      email: string
      role: string
      isActive: boolean
      emailVerified: Date | null
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propiedades<T extends User$propiedadesArgs<ExtArgs> = {}>(args?: Subset<T, User$propiedadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropiedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritos<T extends User$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.propiedades
   */
  export type User$propiedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propiedad
     */
    select?: PropiedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Propiedad
     */
    omit?: PropiedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropiedadInclude<ExtArgs> | null
    where?: PropiedadWhereInput
    orderBy?: PropiedadOrderByWithRelationInput | PropiedadOrderByWithRelationInput[]
    cursor?: PropiedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropiedadScalarFieldEnum | PropiedadScalarFieldEnum[]
  }

  /**
   * User.favoritos
   */
  export type User$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorito
     */
    omit?: FavoritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tipo: 'tipo',
    estado: 'estado'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const AmenitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    estado: 'estado'
  };

  export type AmenitiesScalarFieldEnum = (typeof AmenitiesScalarFieldEnum)[keyof typeof AmenitiesScalarFieldEnum]


  export const TipoPropiedadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    estado: 'estado'
  };

  export type TipoPropiedadScalarFieldEnum = (typeof TipoPropiedadScalarFieldEnum)[keyof typeof TipoPropiedadScalarFieldEnum]


  export const PropiedadScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    apto: 'apto',
    precio: 'precio',
    metros: 'metros',
    altura: 'altura',
    address: 'address',
    geoLink: 'geoLink',
    esPrincipal: 'esPrincipal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    rentaVenta: 'rentaVenta',
    temperatura: 'temperatura',
    categoriaId: 'categoriaId',
    tipoPropiedadId: 'tipoPropiedadId',
    ciudadId: 'ciudadId',
    userId: 'userId'
  };

  export type PropiedadScalarFieldEnum = (typeof PropiedadScalarFieldEnum)[keyof typeof PropiedadScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propiedadId: 'propiedadId',
    createdAt: 'createdAt'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const PropiedadImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    propiedadId: 'propiedadId'
  };

  export type PropiedadImageScalarFieldEnum = (typeof PropiedadImageScalarFieldEnum)[keyof typeof PropiedadImageScalarFieldEnum]


  export const ContactoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    telefono: 'telefono',
    email: 'email',
    mensaje: 'mensaje',
    fechaCreacion: 'fechaCreacion'
  };

  export type ContactoScalarFieldEnum = (typeof ContactoScalarFieldEnum)[keyof typeof ContactoScalarFieldEnum]


  export const CiudadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    url: 'url'
  };

  export type CiudadScalarFieldEnum = (typeof CiudadScalarFieldEnum)[keyof typeof CiudadScalarFieldEnum]


  export const ServicioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    ciudadId: 'ciudadId'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const ServicioImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    servicioId: 'servicioId'
  };

  export type ServicioImageScalarFieldEnum = (typeof ServicioImageScalarFieldEnum)[keyof typeof ServicioImageScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    refresh_token_expires_in: 'refresh_token_expires_in',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    contactoId: 'contactoId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    contactoId: 'contactoId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    email: 'email',
    role: 'role',
    isActive: 'isActive',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    name?: StringFilter<"Categoria"> | string
    tipo?: IntFilter<"Categoria"> | number
    estado?: BoolFilter<"Categoria"> | boolean
    Propiedad?: PropiedadListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    Propiedad?: PropiedadOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    tipo?: IntFilter<"Categoria"> | number
    estado?: BoolFilter<"Categoria"> | boolean
    Propiedad?: PropiedadListRelationFilter
  }, "id" | "name">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    name?: StringWithAggregatesFilter<"Categoria"> | string
    tipo?: IntWithAggregatesFilter<"Categoria"> | number
    estado?: BoolWithAggregatesFilter<"Categoria"> | boolean
  }

  export type AmenitiesWhereInput = {
    AND?: AmenitiesWhereInput | AmenitiesWhereInput[]
    OR?: AmenitiesWhereInput[]
    NOT?: AmenitiesWhereInput | AmenitiesWhereInput[]
    id?: StringFilter<"Amenities"> | string
    name?: StringFilter<"Amenities"> | string
    estado?: BoolFilter<"Amenities"> | boolean
    propiedades?: PropiedadListRelationFilter
  }

  export type AmenitiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
    propiedades?: PropiedadOrderByRelationAggregateInput
  }

  export type AmenitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AmenitiesWhereInput | AmenitiesWhereInput[]
    OR?: AmenitiesWhereInput[]
    NOT?: AmenitiesWhereInput | AmenitiesWhereInput[]
    estado?: BoolFilter<"Amenities"> | boolean
    propiedades?: PropiedadListRelationFilter
  }, "id" | "name">

  export type AmenitiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
    _count?: AmenitiesCountOrderByAggregateInput
    _max?: AmenitiesMaxOrderByAggregateInput
    _min?: AmenitiesMinOrderByAggregateInput
  }

  export type AmenitiesScalarWhereWithAggregatesInput = {
    AND?: AmenitiesScalarWhereWithAggregatesInput | AmenitiesScalarWhereWithAggregatesInput[]
    OR?: AmenitiesScalarWhereWithAggregatesInput[]
    NOT?: AmenitiesScalarWhereWithAggregatesInput | AmenitiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Amenities"> | string
    name?: StringWithAggregatesFilter<"Amenities"> | string
    estado?: BoolWithAggregatesFilter<"Amenities"> | boolean
  }

  export type TipoPropiedadWhereInput = {
    AND?: TipoPropiedadWhereInput | TipoPropiedadWhereInput[]
    OR?: TipoPropiedadWhereInput[]
    NOT?: TipoPropiedadWhereInput | TipoPropiedadWhereInput[]
    id?: StringFilter<"TipoPropiedad"> | string
    name?: StringFilter<"TipoPropiedad"> | string
    estado?: BoolFilter<"TipoPropiedad"> | boolean
    propiedades?: PropiedadListRelationFilter
  }

  export type TipoPropiedadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
    propiedades?: PropiedadOrderByRelationAggregateInput
  }

  export type TipoPropiedadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TipoPropiedadWhereInput | TipoPropiedadWhereInput[]
    OR?: TipoPropiedadWhereInput[]
    NOT?: TipoPropiedadWhereInput | TipoPropiedadWhereInput[]
    estado?: BoolFilter<"TipoPropiedad"> | boolean
    propiedades?: PropiedadListRelationFilter
  }, "id" | "name">

  export type TipoPropiedadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
    _count?: TipoPropiedadCountOrderByAggregateInput
    _max?: TipoPropiedadMaxOrderByAggregateInput
    _min?: TipoPropiedadMinOrderByAggregateInput
  }

  export type TipoPropiedadScalarWhereWithAggregatesInput = {
    AND?: TipoPropiedadScalarWhereWithAggregatesInput | TipoPropiedadScalarWhereWithAggregatesInput[]
    OR?: TipoPropiedadScalarWhereWithAggregatesInput[]
    NOT?: TipoPropiedadScalarWhereWithAggregatesInput | TipoPropiedadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TipoPropiedad"> | string
    name?: StringWithAggregatesFilter<"TipoPropiedad"> | string
    estado?: BoolWithAggregatesFilter<"TipoPropiedad"> | boolean
  }

  export type PropiedadWhereInput = {
    AND?: PropiedadWhereInput | PropiedadWhereInput[]
    OR?: PropiedadWhereInput[]
    NOT?: PropiedadWhereInput | PropiedadWhereInput[]
    id?: StringFilter<"Propiedad"> | string
    title?: StringFilter<"Propiedad"> | string
    slug?: StringFilter<"Propiedad"> | string
    description?: StringNullableFilter<"Propiedad"> | string | null
    apto?: StringNullableFilter<"Propiedad"> | string | null
    precio?: FloatFilter<"Propiedad"> | number
    metros?: FloatFilter<"Propiedad"> | number
    altura?: FloatFilter<"Propiedad"> | number
    address?: StringNullableFilter<"Propiedad"> | string | null
    geoLink?: StringFilter<"Propiedad"> | string
    esPrincipal?: BoolFilter<"Propiedad"> | boolean
    createdAt?: DateTimeFilter<"Propiedad"> | Date | string
    updatedAt?: DateTimeFilter<"Propiedad"> | Date | string
    rentaVenta?: StringNullableFilter<"Propiedad"> | string | null
    temperatura?: StringNullableFilter<"Propiedad"> | string | null
    categoriaId?: StringFilter<"Propiedad"> | string
    tipoPropiedadId?: StringFilter<"Propiedad"> | string
    ciudadId?: StringFilter<"Propiedad"> | string
    userId?: StringNullableFilter<"Propiedad"> | string | null
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    tipoPropiedad?: XOR<TipoPropiedadNullableScalarRelationFilter, TipoPropiedadWhereInput> | null
    ciudad?: XOR<CiudadScalarRelationFilter, CiudadWhereInput>
    amenities?: AmenitiesListRelationFilter
    images?: PropiedadImageListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PropiedadOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    apto?: SortOrderInput | SortOrder
    precio?: SortOrder
    metros?: SortOrder
    altura?: SortOrder
    address?: SortOrderInput | SortOrder
    geoLink?: SortOrder
    esPrincipal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rentaVenta?: SortOrderInput | SortOrder
    temperatura?: SortOrderInput | SortOrder
    categoriaId?: SortOrder
    tipoPropiedadId?: SortOrder
    ciudadId?: SortOrder
    userId?: SortOrderInput | SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    tipoPropiedad?: TipoPropiedadOrderByWithRelationInput
    ciudad?: CiudadOrderByWithRelationInput
    amenities?: AmenitiesOrderByRelationAggregateInput
    images?: PropiedadImageOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type PropiedadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PropiedadWhereInput | PropiedadWhereInput[]
    OR?: PropiedadWhereInput[]
    NOT?: PropiedadWhereInput | PropiedadWhereInput[]
    title?: StringFilter<"Propiedad"> | string
    description?: StringNullableFilter<"Propiedad"> | string | null
    apto?: StringNullableFilter<"Propiedad"> | string | null
    precio?: FloatFilter<"Propiedad"> | number
    metros?: FloatFilter<"Propiedad"> | number
    altura?: FloatFilter<"Propiedad"> | number
    address?: StringNullableFilter<"Propiedad"> | string | null
    geoLink?: StringFilter<"Propiedad"> | string
    esPrincipal?: BoolFilter<"Propiedad"> | boolean
    createdAt?: DateTimeFilter<"Propiedad"> | Date | string
    updatedAt?: DateTimeFilter<"Propiedad"> | Date | string
    rentaVenta?: StringNullableFilter<"Propiedad"> | string | null
    temperatura?: StringNullableFilter<"Propiedad"> | string | null
    categoriaId?: StringFilter<"Propiedad"> | string
    tipoPropiedadId?: StringFilter<"Propiedad"> | string
    ciudadId?: StringFilter<"Propiedad"> | string
    userId?: StringNullableFilter<"Propiedad"> | string | null
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    tipoPropiedad?: XOR<TipoPropiedadNullableScalarRelationFilter, TipoPropiedadWhereInput> | null
    ciudad?: XOR<CiudadScalarRelationFilter, CiudadWhereInput>
    amenities?: AmenitiesListRelationFilter
    images?: PropiedadImageListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "slug">

  export type PropiedadOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    apto?: SortOrderInput | SortOrder
    precio?: SortOrder
    metros?: SortOrder
    altura?: SortOrder
    address?: SortOrderInput | SortOrder
    geoLink?: SortOrder
    esPrincipal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rentaVenta?: SortOrderInput | SortOrder
    temperatura?: SortOrderInput | SortOrder
    categoriaId?: SortOrder
    tipoPropiedadId?: SortOrder
    ciudadId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: PropiedadCountOrderByAggregateInput
    _avg?: PropiedadAvgOrderByAggregateInput
    _max?: PropiedadMaxOrderByAggregateInput
    _min?: PropiedadMinOrderByAggregateInput
    _sum?: PropiedadSumOrderByAggregateInput
  }

  export type PropiedadScalarWhereWithAggregatesInput = {
    AND?: PropiedadScalarWhereWithAggregatesInput | PropiedadScalarWhereWithAggregatesInput[]
    OR?: PropiedadScalarWhereWithAggregatesInput[]
    NOT?: PropiedadScalarWhereWithAggregatesInput | PropiedadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Propiedad"> | string
    title?: StringWithAggregatesFilter<"Propiedad"> | string
    slug?: StringWithAggregatesFilter<"Propiedad"> | string
    description?: StringNullableWithAggregatesFilter<"Propiedad"> | string | null
    apto?: StringNullableWithAggregatesFilter<"Propiedad"> | string | null
    precio?: FloatWithAggregatesFilter<"Propiedad"> | number
    metros?: FloatWithAggregatesFilter<"Propiedad"> | number
    altura?: FloatWithAggregatesFilter<"Propiedad"> | number
    address?: StringNullableWithAggregatesFilter<"Propiedad"> | string | null
    geoLink?: StringWithAggregatesFilter<"Propiedad"> | string
    esPrincipal?: BoolWithAggregatesFilter<"Propiedad"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Propiedad"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Propiedad"> | Date | string
    rentaVenta?: StringNullableWithAggregatesFilter<"Propiedad"> | string | null
    temperatura?: StringNullableWithAggregatesFilter<"Propiedad"> | string | null
    categoriaId?: StringWithAggregatesFilter<"Propiedad"> | string
    tipoPropiedadId?: StringWithAggregatesFilter<"Propiedad"> | string
    ciudadId?: StringWithAggregatesFilter<"Propiedad"> | string
    userId?: StringNullableWithAggregatesFilter<"Propiedad"> | string | null
  }

  export type FavoritoWhereInput = {
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    id?: StringFilter<"Favorito"> | string
    userId?: StringFilter<"Favorito"> | string
    propiedadId?: StringFilter<"Favorito"> | string
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavoritoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propiedadId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FavoritoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    userId?: StringFilter<"Favorito"> | string
    propiedadId?: StringFilter<"Favorito"> | string
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FavoritoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propiedadId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoritoCountOrderByAggregateInput
    _max?: FavoritoMaxOrderByAggregateInput
    _min?: FavoritoMinOrderByAggregateInput
  }

  export type FavoritoScalarWhereWithAggregatesInput = {
    AND?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    OR?: FavoritoScalarWhereWithAggregatesInput[]
    NOT?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorito"> | string
    userId?: StringWithAggregatesFilter<"Favorito"> | string
    propiedadId?: StringWithAggregatesFilter<"Favorito"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorito"> | Date | string
  }

  export type PropiedadImageWhereInput = {
    AND?: PropiedadImageWhereInput | PropiedadImageWhereInput[]
    OR?: PropiedadImageWhereInput[]
    NOT?: PropiedadImageWhereInput | PropiedadImageWhereInput[]
    id?: IntFilter<"PropiedadImage"> | number
    url?: StringFilter<"PropiedadImage"> | string
    propiedadId?: StringFilter<"PropiedadImage"> | string
    propiedad?: XOR<PropiedadScalarRelationFilter, PropiedadWhereInput>
  }

  export type PropiedadImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    propiedadId?: SortOrder
    propiedad?: PropiedadOrderByWithRelationInput
  }

  export type PropiedadImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropiedadImageWhereInput | PropiedadImageWhereInput[]
    OR?: PropiedadImageWhereInput[]
    NOT?: PropiedadImageWhereInput | PropiedadImageWhereInput[]
    url?: StringFilter<"PropiedadImage"> | string
    propiedadId?: StringFilter<"PropiedadImage"> | string
    propiedad?: XOR<PropiedadScalarRelationFilter, PropiedadWhereInput>
  }, "id">

  export type PropiedadImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    propiedadId?: SortOrder
    _count?: PropiedadImageCountOrderByAggregateInput
    _avg?: PropiedadImageAvgOrderByAggregateInput
    _max?: PropiedadImageMaxOrderByAggregateInput
    _min?: PropiedadImageMinOrderByAggregateInput
    _sum?: PropiedadImageSumOrderByAggregateInput
  }

  export type PropiedadImageScalarWhereWithAggregatesInput = {
    AND?: PropiedadImageScalarWhereWithAggregatesInput | PropiedadImageScalarWhereWithAggregatesInput[]
    OR?: PropiedadImageScalarWhereWithAggregatesInput[]
    NOT?: PropiedadImageScalarWhereWithAggregatesInput | PropiedadImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropiedadImage"> | number
    url?: StringWithAggregatesFilter<"PropiedadImage"> | string
    propiedadId?: StringWithAggregatesFilter<"PropiedadImage"> | string
  }

  export type ContactoWhereInput = {
    AND?: ContactoWhereInput | ContactoWhereInput[]
    OR?: ContactoWhereInput[]
    NOT?: ContactoWhereInput | ContactoWhereInput[]
    id?: StringFilter<"Contacto"> | string
    name?: StringNullableFilter<"Contacto"> | string | null
    telefono?: StringNullableFilter<"Contacto"> | string | null
    email?: StringFilter<"Contacto"> | string
    mensaje?: StringNullableFilter<"Contacto"> | string | null
    fechaCreacion?: DateTimeFilter<"Contacto"> | Date | string
  }

  export type ContactoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrder
    mensaje?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
  }

  export type ContactoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactoWhereInput | ContactoWhereInput[]
    OR?: ContactoWhereInput[]
    NOT?: ContactoWhereInput | ContactoWhereInput[]
    name?: StringNullableFilter<"Contacto"> | string | null
    telefono?: StringNullableFilter<"Contacto"> | string | null
    email?: StringFilter<"Contacto"> | string
    mensaje?: StringNullableFilter<"Contacto"> | string | null
    fechaCreacion?: DateTimeFilter<"Contacto"> | Date | string
  }, "id">

  export type ContactoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrder
    mensaje?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrder
    _count?: ContactoCountOrderByAggregateInput
    _max?: ContactoMaxOrderByAggregateInput
    _min?: ContactoMinOrderByAggregateInput
  }

  export type ContactoScalarWhereWithAggregatesInput = {
    AND?: ContactoScalarWhereWithAggregatesInput | ContactoScalarWhereWithAggregatesInput[]
    OR?: ContactoScalarWhereWithAggregatesInput[]
    NOT?: ContactoScalarWhereWithAggregatesInput | ContactoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contacto"> | string
    name?: StringNullableWithAggregatesFilter<"Contacto"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Contacto"> | string | null
    email?: StringWithAggregatesFilter<"Contacto"> | string
    mensaje?: StringNullableWithAggregatesFilter<"Contacto"> | string | null
    fechaCreacion?: DateTimeWithAggregatesFilter<"Contacto"> | Date | string
  }

  export type CiudadWhereInput = {
    AND?: CiudadWhereInput | CiudadWhereInput[]
    OR?: CiudadWhereInput[]
    NOT?: CiudadWhereInput | CiudadWhereInput[]
    id?: StringFilter<"Ciudad"> | string
    nombre?: StringFilter<"Ciudad"> | string
    descripcion?: StringNullableFilter<"Ciudad"> | string | null
    url?: StringNullableFilter<"Ciudad"> | string | null
    servicios?: ServicioListRelationFilter
    propiedades?: PropiedadListRelationFilter
  }

  export type CiudadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    servicios?: ServicioOrderByRelationAggregateInput
    propiedades?: PropiedadOrderByRelationAggregateInput
  }

  export type CiudadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CiudadWhereInput | CiudadWhereInput[]
    OR?: CiudadWhereInput[]
    NOT?: CiudadWhereInput | CiudadWhereInput[]
    nombre?: StringFilter<"Ciudad"> | string
    descripcion?: StringNullableFilter<"Ciudad"> | string | null
    url?: StringNullableFilter<"Ciudad"> | string | null
    servicios?: ServicioListRelationFilter
    propiedades?: PropiedadListRelationFilter
  }, "id">

  export type CiudadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    _count?: CiudadCountOrderByAggregateInput
    _max?: CiudadMaxOrderByAggregateInput
    _min?: CiudadMinOrderByAggregateInput
  }

  export type CiudadScalarWhereWithAggregatesInput = {
    AND?: CiudadScalarWhereWithAggregatesInput | CiudadScalarWhereWithAggregatesInput[]
    OR?: CiudadScalarWhereWithAggregatesInput[]
    NOT?: CiudadScalarWhereWithAggregatesInput | CiudadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ciudad"> | string
    nombre?: StringWithAggregatesFilter<"Ciudad"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Ciudad"> | string | null
    url?: StringNullableWithAggregatesFilter<"Ciudad"> | string | null
  }

  export type ServicioWhereInput = {
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    id?: StringFilter<"Servicio"> | string
    nombre?: StringFilter<"Servicio"> | string
    descripcion?: StringNullableFilter<"Servicio"> | string | null
    ciudadId?: StringFilter<"Servicio"> | string
    ciudad?: XOR<CiudadScalarRelationFilter, CiudadWhereInput>
    images?: ServicioImageListRelationFilter
  }

  export type ServicioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    ciudadId?: SortOrder
    ciudad?: CiudadOrderByWithRelationInput
    images?: ServicioImageOrderByRelationAggregateInput
  }

  export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    nombre?: StringFilter<"Servicio"> | string
    descripcion?: StringNullableFilter<"Servicio"> | string | null
    ciudadId?: StringFilter<"Servicio"> | string
    ciudad?: XOR<CiudadScalarRelationFilter, CiudadWhereInput>
    images?: ServicioImageListRelationFilter
  }, "id">

  export type ServicioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    ciudadId?: SortOrder
    _count?: ServicioCountOrderByAggregateInput
    _max?: ServicioMaxOrderByAggregateInput
    _min?: ServicioMinOrderByAggregateInput
  }

  export type ServicioScalarWhereWithAggregatesInput = {
    AND?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    OR?: ServicioScalarWhereWithAggregatesInput[]
    NOT?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Servicio"> | string
    nombre?: StringWithAggregatesFilter<"Servicio"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Servicio"> | string | null
    ciudadId?: StringWithAggregatesFilter<"Servicio"> | string
  }

  export type ServicioImageWhereInput = {
    AND?: ServicioImageWhereInput | ServicioImageWhereInput[]
    OR?: ServicioImageWhereInput[]
    NOT?: ServicioImageWhereInput | ServicioImageWhereInput[]
    id?: IntFilter<"ServicioImage"> | number
    url?: StringFilter<"ServicioImage"> | string
    servicioId?: StringFilter<"ServicioImage"> | string
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }

  export type ServicioImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    servicioId?: SortOrder
    servicio?: ServicioOrderByWithRelationInput
  }

  export type ServicioImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicioImageWhereInput | ServicioImageWhereInput[]
    OR?: ServicioImageWhereInput[]
    NOT?: ServicioImageWhereInput | ServicioImageWhereInput[]
    url?: StringFilter<"ServicioImage"> | string
    servicioId?: StringFilter<"ServicioImage"> | string
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }, "id">

  export type ServicioImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    servicioId?: SortOrder
    _count?: ServicioImageCountOrderByAggregateInput
    _avg?: ServicioImageAvgOrderByAggregateInput
    _max?: ServicioImageMaxOrderByAggregateInput
    _min?: ServicioImageMinOrderByAggregateInput
    _sum?: ServicioImageSumOrderByAggregateInput
  }

  export type ServicioImageScalarWhereWithAggregatesInput = {
    AND?: ServicioImageScalarWhereWithAggregatesInput | ServicioImageScalarWhereWithAggregatesInput[]
    OR?: ServicioImageScalarWhereWithAggregatesInput[]
    NOT?: ServicioImageScalarWhereWithAggregatesInput | ServicioImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServicioImage"> | number
    url?: StringWithAggregatesFilter<"ServicioImage"> | string
    servicioId?: StringWithAggregatesFilter<"ServicioImage"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    contactoId?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    contactoId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    contactoId?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    contactoId?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    contactoId?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    contactoId?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    contactoId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    contactoId?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    contactoId?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    contactoId?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    propiedades?: PropiedadListRelationFilter
    favoritos?: FavoritoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    propiedades?: PropiedadOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    propiedades?: PropiedadListRelationFilter
    favoritos?: FavoritoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type CategoriaCreateInput = {
    id?: string
    name: string
    tipo: number
    estado?: boolean
    Propiedad?: PropiedadCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    name: string
    tipo: number
    estado?: boolean
    Propiedad?: PropiedadUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tipo?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    Propiedad?: PropiedadUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tipo?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
    Propiedad?: PropiedadUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    name: string
    tipo: number
    estado?: boolean
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tipo?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tipo?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AmenitiesCreateInput = {
    id?: string
    name: string
    estado?: boolean
    propiedades?: PropiedadCreateNestedManyWithoutAmenitiesInput
  }

  export type AmenitiesUncheckedCreateInput = {
    id?: string
    name: string
    estado?: boolean
    propiedades?: PropiedadUncheckedCreateNestedManyWithoutAmenitiesInput
  }

  export type AmenitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    propiedades?: PropiedadUpdateManyWithoutAmenitiesNestedInput
  }

  export type AmenitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    propiedades?: PropiedadUncheckedUpdateManyWithoutAmenitiesNestedInput
  }

  export type AmenitiesCreateManyInput = {
    id?: string
    name: string
    estado?: boolean
  }

  export type AmenitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AmenitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoPropiedadCreateInput = {
    id?: string
    name: string
    estado?: boolean
    propiedades?: PropiedadCreateNestedManyWithoutTipoPropiedadInput
  }

  export type TipoPropiedadUncheckedCreateInput = {
    id?: string
    name: string
    estado?: boolean
    propiedades?: PropiedadUncheckedCreateNestedManyWithoutTipoPropiedadInput
  }

  export type TipoPropiedadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    propiedades?: PropiedadUpdateManyWithoutTipoPropiedadNestedInput
  }

  export type TipoPropiedadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    propiedades?: PropiedadUncheckedUpdateManyWithoutTipoPropiedadNestedInput
  }

  export type TipoPropiedadCreateManyInput = {
    id?: string
    name: string
    estado?: boolean
  }

  export type TipoPropiedadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoPropiedadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropiedadCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoria?: CategoriaCreateNestedOneWithoutPropiedadInput
    tipoPropiedad?: TipoPropiedadCreateNestedOneWithoutPropiedadesInput
    ciudad: CiudadCreateNestedOneWithoutPropiedadesInput
    amenities?: AmenitiesCreateNestedManyWithoutPropiedadesInput
    images?: PropiedadImageCreateNestedManyWithoutPropiedadInput
    User?: UserCreateNestedOneWithoutPropiedadesInput
  }

  export type PropiedadUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoriaId: string
    tipoPropiedadId: string
    ciudadId: string
    userId?: string | null
    amenities?: AmenitiesUncheckedCreateNestedManyWithoutPropiedadesInput
    images?: PropiedadImageUncheckedCreateNestedManyWithoutPropiedadInput
  }

  export type PropiedadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneWithoutPropiedadNestedInput
    tipoPropiedad?: TipoPropiedadUpdateOneWithoutPropiedadesNestedInput
    ciudad?: CiudadUpdateOneRequiredWithoutPropiedadesNestedInput
    amenities?: AmenitiesUpdateManyWithoutPropiedadesNestedInput
    images?: PropiedadImageUpdateManyWithoutPropiedadNestedInput
    User?: UserUpdateOneWithoutPropiedadesNestedInput
  }

  export type PropiedadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: AmenitiesUncheckedUpdateManyWithoutPropiedadesNestedInput
    images?: PropiedadImageUncheckedUpdateManyWithoutPropiedadNestedInput
  }

  export type PropiedadCreateManyInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoriaId: string
    tipoPropiedadId: string
    ciudadId: string
    userId?: string | null
  }

  export type PropiedadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropiedadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoritoCreateInput = {
    id?: string
    propiedadId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateInput = {
    id?: string
    userId: string
    propiedadId: string
    createdAt?: Date | string
  }

  export type FavoritoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propiedadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propiedadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateManyInput = {
    id?: string
    userId: string
    propiedadId: string
    createdAt?: Date | string
  }

  export type FavoritoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    propiedadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propiedadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropiedadImageCreateInput = {
    url: string
    propiedad: PropiedadCreateNestedOneWithoutImagesInput
  }

  export type PropiedadImageUncheckedCreateInput = {
    id?: number
    url: string
    propiedadId: string
  }

  export type PropiedadImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    propiedad?: PropiedadUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PropiedadImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    propiedadId?: StringFieldUpdateOperationsInput | string
  }

  export type PropiedadImageCreateManyInput = {
    id?: number
    url: string
    propiedadId: string
  }

  export type PropiedadImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PropiedadImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    propiedadId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactoCreateInput = {
    id?: string
    name?: string | null
    telefono?: string | null
    email: string
    mensaje?: string | null
    fechaCreacion?: Date | string
  }

  export type ContactoUncheckedCreateInput = {
    id?: string
    name?: string | null
    telefono?: string | null
    email: string
    mensaje?: string | null
    fechaCreacion?: Date | string
  }

  export type ContactoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactoCreateManyInput = {
    id?: string
    name?: string | null
    telefono?: string | null
    email: string
    mensaje?: string | null
    fechaCreacion?: Date | string
  }

  export type ContactoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CiudadCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    url?: string | null
    servicios?: ServicioCreateNestedManyWithoutCiudadInput
    propiedades?: PropiedadCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    url?: string | null
    servicios?: ServicioUncheckedCreateNestedManyWithoutCiudadInput
    propiedades?: PropiedadUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    servicios?: ServicioUpdateManyWithoutCiudadNestedInput
    propiedades?: PropiedadUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    servicios?: ServicioUncheckedUpdateManyWithoutCiudadNestedInput
    propiedades?: PropiedadUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    url?: string | null
  }

  export type CiudadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CiudadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicioCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    ciudad: CiudadCreateNestedOneWithoutServiciosInput
    images?: ServicioImageCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    ciudadId: string
    images?: ServicioImageUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: CiudadUpdateOneRequiredWithoutServiciosNestedInput
    images?: ServicioImageUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudadId?: StringFieldUpdateOperationsInput | string
    images?: ServicioImageUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    ciudadId: string
  }

  export type ServicioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudadId?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioImageCreateInput = {
    url: string
    servicio: ServicioCreateNestedOneWithoutImagesInput
  }

  export type ServicioImageUncheckedCreateInput = {
    id?: number
    url: string
    servicioId: string
  }

  export type ServicioImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    servicio?: ServicioUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ServicioImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    servicioId?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioImageCreateManyInput = {
    id?: number
    url: string
    servicioId: string
  }

  export type ServicioImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    servicioId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    contactoId?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    contactoId?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    contactoId?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    contactoId?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    contactoId?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
    contactoId?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    propiedades?: PropiedadCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    propiedades?: PropiedadUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    propiedades?: PropiedadUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    propiedades?: PropiedadUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PropiedadListRelationFilter = {
    every?: PropiedadWhereInput
    some?: PropiedadWhereInput
    none?: PropiedadWhereInput
  }

  export type PropiedadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    tipo?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    tipo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AmenitiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
  }

  export type AmenitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
  }

  export type AmenitiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
  }

  export type TipoPropiedadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
  }

  export type TipoPropiedadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
  }

  export type TipoPropiedadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoriaNullableScalarRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type TipoPropiedadNullableScalarRelationFilter = {
    is?: TipoPropiedadWhereInput | null
    isNot?: TipoPropiedadWhereInput | null
  }

  export type CiudadScalarRelationFilter = {
    is?: CiudadWhereInput
    isNot?: CiudadWhereInput
  }

  export type AmenitiesListRelationFilter = {
    every?: AmenitiesWhereInput
    some?: AmenitiesWhereInput
    none?: AmenitiesWhereInput
  }

  export type PropiedadImageListRelationFilter = {
    every?: PropiedadImageWhereInput
    some?: PropiedadImageWhereInput
    none?: PropiedadImageWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AmenitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropiedadImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropiedadCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    apto?: SortOrder
    precio?: SortOrder
    metros?: SortOrder
    altura?: SortOrder
    address?: SortOrder
    geoLink?: SortOrder
    esPrincipal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rentaVenta?: SortOrder
    temperatura?: SortOrder
    categoriaId?: SortOrder
    tipoPropiedadId?: SortOrder
    ciudadId?: SortOrder
    userId?: SortOrder
  }

  export type PropiedadAvgOrderByAggregateInput = {
    precio?: SortOrder
    metros?: SortOrder
    altura?: SortOrder
  }

  export type PropiedadMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    apto?: SortOrder
    precio?: SortOrder
    metros?: SortOrder
    altura?: SortOrder
    address?: SortOrder
    geoLink?: SortOrder
    esPrincipal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rentaVenta?: SortOrder
    temperatura?: SortOrder
    categoriaId?: SortOrder
    tipoPropiedadId?: SortOrder
    ciudadId?: SortOrder
    userId?: SortOrder
  }

  export type PropiedadMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    apto?: SortOrder
    precio?: SortOrder
    metros?: SortOrder
    altura?: SortOrder
    address?: SortOrder
    geoLink?: SortOrder
    esPrincipal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rentaVenta?: SortOrder
    temperatura?: SortOrder
    categoriaId?: SortOrder
    tipoPropiedadId?: SortOrder
    ciudadId?: SortOrder
    userId?: SortOrder
  }

  export type PropiedadSumOrderByAggregateInput = {
    precio?: SortOrder
    metros?: SortOrder
    altura?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FavoritoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propiedadId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propiedadId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propiedadId?: SortOrder
    createdAt?: SortOrder
  }

  export type PropiedadScalarRelationFilter = {
    is?: PropiedadWhereInput
    isNot?: PropiedadWhereInput
  }

  export type PropiedadImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    propiedadId?: SortOrder
  }

  export type PropiedadImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PropiedadImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    propiedadId?: SortOrder
  }

  export type PropiedadImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    propiedadId?: SortOrder
  }

  export type PropiedadImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    mensaje?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ContactoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    mensaje?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ContactoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    mensaje?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ServicioListRelationFilter = {
    every?: ServicioWhereInput
    some?: ServicioWhereInput
    none?: ServicioWhereInput
  }

  export type ServicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CiudadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
  }

  export type CiudadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
  }

  export type CiudadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
  }

  export type ServicioImageListRelationFilter = {
    every?: ServicioImageWhereInput
    some?: ServicioImageWhereInput
    none?: ServicioImageWhereInput
  }

  export type ServicioImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ciudadId?: SortOrder
  }

  export type ServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ciudadId?: SortOrder
  }

  export type ServicioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    ciudadId?: SortOrder
  }

  export type ServicioScalarRelationFilter = {
    is?: ServicioWhereInput
    isNot?: ServicioWhereInput
  }

  export type ServicioImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    servicioId?: SortOrder
  }

  export type ServicioImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServicioImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    servicioId?: SortOrder
  }

  export type ServicioImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    servicioId?: SortOrder
  }

  export type ServicioImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expires_in?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    contactoId?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    refresh_token_expires_in?: SortOrder
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expires_in?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    contactoId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expires_in?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    contactoId?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    refresh_token_expires_in?: SortOrder
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    contactoId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    contactoId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    contactoId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type FavoritoListRelationFilter = {
    every?: FavoritoWhereInput
    some?: FavoritoWhereInput
    none?: FavoritoWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type PropiedadCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PropiedadCreateWithoutCategoriaInput, PropiedadUncheckedCreateWithoutCategoriaInput> | PropiedadCreateWithoutCategoriaInput[] | PropiedadUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutCategoriaInput | PropiedadCreateOrConnectWithoutCategoriaInput[]
    createMany?: PropiedadCreateManyCategoriaInputEnvelope
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
  }

  export type PropiedadUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PropiedadCreateWithoutCategoriaInput, PropiedadUncheckedCreateWithoutCategoriaInput> | PropiedadCreateWithoutCategoriaInput[] | PropiedadUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutCategoriaInput | PropiedadCreateOrConnectWithoutCategoriaInput[]
    createMany?: PropiedadCreateManyCategoriaInputEnvelope
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PropiedadUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PropiedadCreateWithoutCategoriaInput, PropiedadUncheckedCreateWithoutCategoriaInput> | PropiedadCreateWithoutCategoriaInput[] | PropiedadUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutCategoriaInput | PropiedadCreateOrConnectWithoutCategoriaInput[]
    upsert?: PropiedadUpsertWithWhereUniqueWithoutCategoriaInput | PropiedadUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PropiedadCreateManyCategoriaInputEnvelope
    set?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    disconnect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    delete?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    update?: PropiedadUpdateWithWhereUniqueWithoutCategoriaInput | PropiedadUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PropiedadUpdateManyWithWhereWithoutCategoriaInput | PropiedadUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
  }

  export type PropiedadUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PropiedadCreateWithoutCategoriaInput, PropiedadUncheckedCreateWithoutCategoriaInput> | PropiedadCreateWithoutCategoriaInput[] | PropiedadUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutCategoriaInput | PropiedadCreateOrConnectWithoutCategoriaInput[]
    upsert?: PropiedadUpsertWithWhereUniqueWithoutCategoriaInput | PropiedadUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PropiedadCreateManyCategoriaInputEnvelope
    set?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    disconnect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    delete?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    update?: PropiedadUpdateWithWhereUniqueWithoutCategoriaInput | PropiedadUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PropiedadUpdateManyWithWhereWithoutCategoriaInput | PropiedadUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
  }

  export type PropiedadCreateNestedManyWithoutAmenitiesInput = {
    create?: XOR<PropiedadCreateWithoutAmenitiesInput, PropiedadUncheckedCreateWithoutAmenitiesInput> | PropiedadCreateWithoutAmenitiesInput[] | PropiedadUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutAmenitiesInput | PropiedadCreateOrConnectWithoutAmenitiesInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
  }

  export type PropiedadUncheckedCreateNestedManyWithoutAmenitiesInput = {
    create?: XOR<PropiedadCreateWithoutAmenitiesInput, PropiedadUncheckedCreateWithoutAmenitiesInput> | PropiedadCreateWithoutAmenitiesInput[] | PropiedadUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutAmenitiesInput | PropiedadCreateOrConnectWithoutAmenitiesInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
  }

  export type PropiedadUpdateManyWithoutAmenitiesNestedInput = {
    create?: XOR<PropiedadCreateWithoutAmenitiesInput, PropiedadUncheckedCreateWithoutAmenitiesInput> | PropiedadCreateWithoutAmenitiesInput[] | PropiedadUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutAmenitiesInput | PropiedadCreateOrConnectWithoutAmenitiesInput[]
    upsert?: PropiedadUpsertWithWhereUniqueWithoutAmenitiesInput | PropiedadUpsertWithWhereUniqueWithoutAmenitiesInput[]
    set?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    disconnect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    delete?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    update?: PropiedadUpdateWithWhereUniqueWithoutAmenitiesInput | PropiedadUpdateWithWhereUniqueWithoutAmenitiesInput[]
    updateMany?: PropiedadUpdateManyWithWhereWithoutAmenitiesInput | PropiedadUpdateManyWithWhereWithoutAmenitiesInput[]
    deleteMany?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
  }

  export type PropiedadUncheckedUpdateManyWithoutAmenitiesNestedInput = {
    create?: XOR<PropiedadCreateWithoutAmenitiesInput, PropiedadUncheckedCreateWithoutAmenitiesInput> | PropiedadCreateWithoutAmenitiesInput[] | PropiedadUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutAmenitiesInput | PropiedadCreateOrConnectWithoutAmenitiesInput[]
    upsert?: PropiedadUpsertWithWhereUniqueWithoutAmenitiesInput | PropiedadUpsertWithWhereUniqueWithoutAmenitiesInput[]
    set?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    disconnect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    delete?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    update?: PropiedadUpdateWithWhereUniqueWithoutAmenitiesInput | PropiedadUpdateWithWhereUniqueWithoutAmenitiesInput[]
    updateMany?: PropiedadUpdateManyWithWhereWithoutAmenitiesInput | PropiedadUpdateManyWithWhereWithoutAmenitiesInput[]
    deleteMany?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
  }

  export type PropiedadCreateNestedManyWithoutTipoPropiedadInput = {
    create?: XOR<PropiedadCreateWithoutTipoPropiedadInput, PropiedadUncheckedCreateWithoutTipoPropiedadInput> | PropiedadCreateWithoutTipoPropiedadInput[] | PropiedadUncheckedCreateWithoutTipoPropiedadInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutTipoPropiedadInput | PropiedadCreateOrConnectWithoutTipoPropiedadInput[]
    createMany?: PropiedadCreateManyTipoPropiedadInputEnvelope
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
  }

  export type PropiedadUncheckedCreateNestedManyWithoutTipoPropiedadInput = {
    create?: XOR<PropiedadCreateWithoutTipoPropiedadInput, PropiedadUncheckedCreateWithoutTipoPropiedadInput> | PropiedadCreateWithoutTipoPropiedadInput[] | PropiedadUncheckedCreateWithoutTipoPropiedadInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutTipoPropiedadInput | PropiedadCreateOrConnectWithoutTipoPropiedadInput[]
    createMany?: PropiedadCreateManyTipoPropiedadInputEnvelope
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
  }

  export type PropiedadUpdateManyWithoutTipoPropiedadNestedInput = {
    create?: XOR<PropiedadCreateWithoutTipoPropiedadInput, PropiedadUncheckedCreateWithoutTipoPropiedadInput> | PropiedadCreateWithoutTipoPropiedadInput[] | PropiedadUncheckedCreateWithoutTipoPropiedadInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutTipoPropiedadInput | PropiedadCreateOrConnectWithoutTipoPropiedadInput[]
    upsert?: PropiedadUpsertWithWhereUniqueWithoutTipoPropiedadInput | PropiedadUpsertWithWhereUniqueWithoutTipoPropiedadInput[]
    createMany?: PropiedadCreateManyTipoPropiedadInputEnvelope
    set?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    disconnect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    delete?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    update?: PropiedadUpdateWithWhereUniqueWithoutTipoPropiedadInput | PropiedadUpdateWithWhereUniqueWithoutTipoPropiedadInput[]
    updateMany?: PropiedadUpdateManyWithWhereWithoutTipoPropiedadInput | PropiedadUpdateManyWithWhereWithoutTipoPropiedadInput[]
    deleteMany?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
  }

  export type PropiedadUncheckedUpdateManyWithoutTipoPropiedadNestedInput = {
    create?: XOR<PropiedadCreateWithoutTipoPropiedadInput, PropiedadUncheckedCreateWithoutTipoPropiedadInput> | PropiedadCreateWithoutTipoPropiedadInput[] | PropiedadUncheckedCreateWithoutTipoPropiedadInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutTipoPropiedadInput | PropiedadCreateOrConnectWithoutTipoPropiedadInput[]
    upsert?: PropiedadUpsertWithWhereUniqueWithoutTipoPropiedadInput | PropiedadUpsertWithWhereUniqueWithoutTipoPropiedadInput[]
    createMany?: PropiedadCreateManyTipoPropiedadInputEnvelope
    set?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    disconnect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    delete?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    update?: PropiedadUpdateWithWhereUniqueWithoutTipoPropiedadInput | PropiedadUpdateWithWhereUniqueWithoutTipoPropiedadInput[]
    updateMany?: PropiedadUpdateManyWithWhereWithoutTipoPropiedadInput | PropiedadUpdateManyWithWhereWithoutTipoPropiedadInput[]
    deleteMany?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutPropiedadInput = {
    create?: XOR<CategoriaCreateWithoutPropiedadInput, CategoriaUncheckedCreateWithoutPropiedadInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPropiedadInput
    connect?: CategoriaWhereUniqueInput
  }

  export type TipoPropiedadCreateNestedOneWithoutPropiedadesInput = {
    create?: XOR<TipoPropiedadCreateWithoutPropiedadesInput, TipoPropiedadUncheckedCreateWithoutPropiedadesInput>
    connectOrCreate?: TipoPropiedadCreateOrConnectWithoutPropiedadesInput
    connect?: TipoPropiedadWhereUniqueInput
  }

  export type CiudadCreateNestedOneWithoutPropiedadesInput = {
    create?: XOR<CiudadCreateWithoutPropiedadesInput, CiudadUncheckedCreateWithoutPropiedadesInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutPropiedadesInput
    connect?: CiudadWhereUniqueInput
  }

  export type AmenitiesCreateNestedManyWithoutPropiedadesInput = {
    create?: XOR<AmenitiesCreateWithoutPropiedadesInput, AmenitiesUncheckedCreateWithoutPropiedadesInput> | AmenitiesCreateWithoutPropiedadesInput[] | AmenitiesUncheckedCreateWithoutPropiedadesInput[]
    connectOrCreate?: AmenitiesCreateOrConnectWithoutPropiedadesInput | AmenitiesCreateOrConnectWithoutPropiedadesInput[]
    connect?: AmenitiesWhereUniqueInput | AmenitiesWhereUniqueInput[]
  }

  export type PropiedadImageCreateNestedManyWithoutPropiedadInput = {
    create?: XOR<PropiedadImageCreateWithoutPropiedadInput, PropiedadImageUncheckedCreateWithoutPropiedadInput> | PropiedadImageCreateWithoutPropiedadInput[] | PropiedadImageUncheckedCreateWithoutPropiedadInput[]
    connectOrCreate?: PropiedadImageCreateOrConnectWithoutPropiedadInput | PropiedadImageCreateOrConnectWithoutPropiedadInput[]
    createMany?: PropiedadImageCreateManyPropiedadInputEnvelope
    connect?: PropiedadImageWhereUniqueInput | PropiedadImageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPropiedadesInput = {
    create?: XOR<UserCreateWithoutPropiedadesInput, UserUncheckedCreateWithoutPropiedadesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropiedadesInput
    connect?: UserWhereUniqueInput
  }

  export type AmenitiesUncheckedCreateNestedManyWithoutPropiedadesInput = {
    create?: XOR<AmenitiesCreateWithoutPropiedadesInput, AmenitiesUncheckedCreateWithoutPropiedadesInput> | AmenitiesCreateWithoutPropiedadesInput[] | AmenitiesUncheckedCreateWithoutPropiedadesInput[]
    connectOrCreate?: AmenitiesCreateOrConnectWithoutPropiedadesInput | AmenitiesCreateOrConnectWithoutPropiedadesInput[]
    connect?: AmenitiesWhereUniqueInput | AmenitiesWhereUniqueInput[]
  }

  export type PropiedadImageUncheckedCreateNestedManyWithoutPropiedadInput = {
    create?: XOR<PropiedadImageCreateWithoutPropiedadInput, PropiedadImageUncheckedCreateWithoutPropiedadInput> | PropiedadImageCreateWithoutPropiedadInput[] | PropiedadImageUncheckedCreateWithoutPropiedadInput[]
    connectOrCreate?: PropiedadImageCreateOrConnectWithoutPropiedadInput | PropiedadImageCreateOrConnectWithoutPropiedadInput[]
    createMany?: PropiedadImageCreateManyPropiedadInputEnvelope
    connect?: PropiedadImageWhereUniqueInput | PropiedadImageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoriaUpdateOneWithoutPropiedadNestedInput = {
    create?: XOR<CategoriaCreateWithoutPropiedadInput, CategoriaUncheckedCreateWithoutPropiedadInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPropiedadInput
    upsert?: CategoriaUpsertWithoutPropiedadInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutPropiedadInput, CategoriaUpdateWithoutPropiedadInput>, CategoriaUncheckedUpdateWithoutPropiedadInput>
  }

  export type TipoPropiedadUpdateOneWithoutPropiedadesNestedInput = {
    create?: XOR<TipoPropiedadCreateWithoutPropiedadesInput, TipoPropiedadUncheckedCreateWithoutPropiedadesInput>
    connectOrCreate?: TipoPropiedadCreateOrConnectWithoutPropiedadesInput
    upsert?: TipoPropiedadUpsertWithoutPropiedadesInput
    disconnect?: TipoPropiedadWhereInput | boolean
    delete?: TipoPropiedadWhereInput | boolean
    connect?: TipoPropiedadWhereUniqueInput
    update?: XOR<XOR<TipoPropiedadUpdateToOneWithWhereWithoutPropiedadesInput, TipoPropiedadUpdateWithoutPropiedadesInput>, TipoPropiedadUncheckedUpdateWithoutPropiedadesInput>
  }

  export type CiudadUpdateOneRequiredWithoutPropiedadesNestedInput = {
    create?: XOR<CiudadCreateWithoutPropiedadesInput, CiudadUncheckedCreateWithoutPropiedadesInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutPropiedadesInput
    upsert?: CiudadUpsertWithoutPropiedadesInput
    connect?: CiudadWhereUniqueInput
    update?: XOR<XOR<CiudadUpdateToOneWithWhereWithoutPropiedadesInput, CiudadUpdateWithoutPropiedadesInput>, CiudadUncheckedUpdateWithoutPropiedadesInput>
  }

  export type AmenitiesUpdateManyWithoutPropiedadesNestedInput = {
    create?: XOR<AmenitiesCreateWithoutPropiedadesInput, AmenitiesUncheckedCreateWithoutPropiedadesInput> | AmenitiesCreateWithoutPropiedadesInput[] | AmenitiesUncheckedCreateWithoutPropiedadesInput[]
    connectOrCreate?: AmenitiesCreateOrConnectWithoutPropiedadesInput | AmenitiesCreateOrConnectWithoutPropiedadesInput[]
    upsert?: AmenitiesUpsertWithWhereUniqueWithoutPropiedadesInput | AmenitiesUpsertWithWhereUniqueWithoutPropiedadesInput[]
    set?: AmenitiesWhereUniqueInput | AmenitiesWhereUniqueInput[]
    disconnect?: AmenitiesWhereUniqueInput | AmenitiesWhereUniqueInput[]
    delete?: AmenitiesWhereUniqueInput | AmenitiesWhereUniqueInput[]
    connect?: AmenitiesWhereUniqueInput | AmenitiesWhereUniqueInput[]
    update?: AmenitiesUpdateWithWhereUniqueWithoutPropiedadesInput | AmenitiesUpdateWithWhereUniqueWithoutPropiedadesInput[]
    updateMany?: AmenitiesUpdateManyWithWhereWithoutPropiedadesInput | AmenitiesUpdateManyWithWhereWithoutPropiedadesInput[]
    deleteMany?: AmenitiesScalarWhereInput | AmenitiesScalarWhereInput[]
  }

  export type PropiedadImageUpdateManyWithoutPropiedadNestedInput = {
    create?: XOR<PropiedadImageCreateWithoutPropiedadInput, PropiedadImageUncheckedCreateWithoutPropiedadInput> | PropiedadImageCreateWithoutPropiedadInput[] | PropiedadImageUncheckedCreateWithoutPropiedadInput[]
    connectOrCreate?: PropiedadImageCreateOrConnectWithoutPropiedadInput | PropiedadImageCreateOrConnectWithoutPropiedadInput[]
    upsert?: PropiedadImageUpsertWithWhereUniqueWithoutPropiedadInput | PropiedadImageUpsertWithWhereUniqueWithoutPropiedadInput[]
    createMany?: PropiedadImageCreateManyPropiedadInputEnvelope
    set?: PropiedadImageWhereUniqueInput | PropiedadImageWhereUniqueInput[]
    disconnect?: PropiedadImageWhereUniqueInput | PropiedadImageWhereUniqueInput[]
    delete?: PropiedadImageWhereUniqueInput | PropiedadImageWhereUniqueInput[]
    connect?: PropiedadImageWhereUniqueInput | PropiedadImageWhereUniqueInput[]
    update?: PropiedadImageUpdateWithWhereUniqueWithoutPropiedadInput | PropiedadImageUpdateWithWhereUniqueWithoutPropiedadInput[]
    updateMany?: PropiedadImageUpdateManyWithWhereWithoutPropiedadInput | PropiedadImageUpdateManyWithWhereWithoutPropiedadInput[]
    deleteMany?: PropiedadImageScalarWhereInput | PropiedadImageScalarWhereInput[]
  }

  export type UserUpdateOneWithoutPropiedadesNestedInput = {
    create?: XOR<UserCreateWithoutPropiedadesInput, UserUncheckedCreateWithoutPropiedadesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropiedadesInput
    upsert?: UserUpsertWithoutPropiedadesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropiedadesInput, UserUpdateWithoutPropiedadesInput>, UserUncheckedUpdateWithoutPropiedadesInput>
  }

  export type AmenitiesUncheckedUpdateManyWithoutPropiedadesNestedInput = {
    create?: XOR<AmenitiesCreateWithoutPropiedadesInput, AmenitiesUncheckedCreateWithoutPropiedadesInput> | AmenitiesCreateWithoutPropiedadesInput[] | AmenitiesUncheckedCreateWithoutPropiedadesInput[]
    connectOrCreate?: AmenitiesCreateOrConnectWithoutPropiedadesInput | AmenitiesCreateOrConnectWithoutPropiedadesInput[]
    upsert?: AmenitiesUpsertWithWhereUniqueWithoutPropiedadesInput | AmenitiesUpsertWithWhereUniqueWithoutPropiedadesInput[]
    set?: AmenitiesWhereUniqueInput | AmenitiesWhereUniqueInput[]
    disconnect?: AmenitiesWhereUniqueInput | AmenitiesWhereUniqueInput[]
    delete?: AmenitiesWhereUniqueInput | AmenitiesWhereUniqueInput[]
    connect?: AmenitiesWhereUniqueInput | AmenitiesWhereUniqueInput[]
    update?: AmenitiesUpdateWithWhereUniqueWithoutPropiedadesInput | AmenitiesUpdateWithWhereUniqueWithoutPropiedadesInput[]
    updateMany?: AmenitiesUpdateManyWithWhereWithoutPropiedadesInput | AmenitiesUpdateManyWithWhereWithoutPropiedadesInput[]
    deleteMany?: AmenitiesScalarWhereInput | AmenitiesScalarWhereInput[]
  }

  export type PropiedadImageUncheckedUpdateManyWithoutPropiedadNestedInput = {
    create?: XOR<PropiedadImageCreateWithoutPropiedadInput, PropiedadImageUncheckedCreateWithoutPropiedadInput> | PropiedadImageCreateWithoutPropiedadInput[] | PropiedadImageUncheckedCreateWithoutPropiedadInput[]
    connectOrCreate?: PropiedadImageCreateOrConnectWithoutPropiedadInput | PropiedadImageCreateOrConnectWithoutPropiedadInput[]
    upsert?: PropiedadImageUpsertWithWhereUniqueWithoutPropiedadInput | PropiedadImageUpsertWithWhereUniqueWithoutPropiedadInput[]
    createMany?: PropiedadImageCreateManyPropiedadInputEnvelope
    set?: PropiedadImageWhereUniqueInput | PropiedadImageWhereUniqueInput[]
    disconnect?: PropiedadImageWhereUniqueInput | PropiedadImageWhereUniqueInput[]
    delete?: PropiedadImageWhereUniqueInput | PropiedadImageWhereUniqueInput[]
    connect?: PropiedadImageWhereUniqueInput | PropiedadImageWhereUniqueInput[]
    update?: PropiedadImageUpdateWithWhereUniqueWithoutPropiedadInput | PropiedadImageUpdateWithWhereUniqueWithoutPropiedadInput[]
    updateMany?: PropiedadImageUpdateManyWithWhereWithoutPropiedadInput | PropiedadImageUpdateManyWithWhereWithoutPropiedadInput[]
    deleteMany?: PropiedadImageScalarWhereInput | PropiedadImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritosInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritosInput
    upsert?: UserUpsertWithoutFavoritosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritosInput, UserUpdateWithoutFavoritosInput>, UserUncheckedUpdateWithoutFavoritosInput>
  }

  export type PropiedadCreateNestedOneWithoutImagesInput = {
    create?: XOR<PropiedadCreateWithoutImagesInput, PropiedadUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropiedadCreateOrConnectWithoutImagesInput
    connect?: PropiedadWhereUniqueInput
  }

  export type PropiedadUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PropiedadCreateWithoutImagesInput, PropiedadUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropiedadCreateOrConnectWithoutImagesInput
    upsert?: PropiedadUpsertWithoutImagesInput
    connect?: PropiedadWhereUniqueInput
    update?: XOR<XOR<PropiedadUpdateToOneWithWhereWithoutImagesInput, PropiedadUpdateWithoutImagesInput>, PropiedadUncheckedUpdateWithoutImagesInput>
  }

  export type ServicioCreateNestedManyWithoutCiudadInput = {
    create?: XOR<ServicioCreateWithoutCiudadInput, ServicioUncheckedCreateWithoutCiudadInput> | ServicioCreateWithoutCiudadInput[] | ServicioUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutCiudadInput | ServicioCreateOrConnectWithoutCiudadInput[]
    createMany?: ServicioCreateManyCiudadInputEnvelope
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type PropiedadCreateNestedManyWithoutCiudadInput = {
    create?: XOR<PropiedadCreateWithoutCiudadInput, PropiedadUncheckedCreateWithoutCiudadInput> | PropiedadCreateWithoutCiudadInput[] | PropiedadUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutCiudadInput | PropiedadCreateOrConnectWithoutCiudadInput[]
    createMany?: PropiedadCreateManyCiudadInputEnvelope
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
  }

  export type ServicioUncheckedCreateNestedManyWithoutCiudadInput = {
    create?: XOR<ServicioCreateWithoutCiudadInput, ServicioUncheckedCreateWithoutCiudadInput> | ServicioCreateWithoutCiudadInput[] | ServicioUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutCiudadInput | ServicioCreateOrConnectWithoutCiudadInput[]
    createMany?: ServicioCreateManyCiudadInputEnvelope
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
  }

  export type PropiedadUncheckedCreateNestedManyWithoutCiudadInput = {
    create?: XOR<PropiedadCreateWithoutCiudadInput, PropiedadUncheckedCreateWithoutCiudadInput> | PropiedadCreateWithoutCiudadInput[] | PropiedadUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutCiudadInput | PropiedadCreateOrConnectWithoutCiudadInput[]
    createMany?: PropiedadCreateManyCiudadInputEnvelope
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
  }

  export type ServicioUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<ServicioCreateWithoutCiudadInput, ServicioUncheckedCreateWithoutCiudadInput> | ServicioCreateWithoutCiudadInput[] | ServicioUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutCiudadInput | ServicioCreateOrConnectWithoutCiudadInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutCiudadInput | ServicioUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: ServicioCreateManyCiudadInputEnvelope
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutCiudadInput | ServicioUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutCiudadInput | ServicioUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type PropiedadUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<PropiedadCreateWithoutCiudadInput, PropiedadUncheckedCreateWithoutCiudadInput> | PropiedadCreateWithoutCiudadInput[] | PropiedadUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutCiudadInput | PropiedadCreateOrConnectWithoutCiudadInput[]
    upsert?: PropiedadUpsertWithWhereUniqueWithoutCiudadInput | PropiedadUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: PropiedadCreateManyCiudadInputEnvelope
    set?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    disconnect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    delete?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    update?: PropiedadUpdateWithWhereUniqueWithoutCiudadInput | PropiedadUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: PropiedadUpdateManyWithWhereWithoutCiudadInput | PropiedadUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
  }

  export type ServicioUncheckedUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<ServicioCreateWithoutCiudadInput, ServicioUncheckedCreateWithoutCiudadInput> | ServicioCreateWithoutCiudadInput[] | ServicioUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: ServicioCreateOrConnectWithoutCiudadInput | ServicioCreateOrConnectWithoutCiudadInput[]
    upsert?: ServicioUpsertWithWhereUniqueWithoutCiudadInput | ServicioUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: ServicioCreateManyCiudadInputEnvelope
    set?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    disconnect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    delete?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    connect?: ServicioWhereUniqueInput | ServicioWhereUniqueInput[]
    update?: ServicioUpdateWithWhereUniqueWithoutCiudadInput | ServicioUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: ServicioUpdateManyWithWhereWithoutCiudadInput | ServicioUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
  }

  export type PropiedadUncheckedUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<PropiedadCreateWithoutCiudadInput, PropiedadUncheckedCreateWithoutCiudadInput> | PropiedadCreateWithoutCiudadInput[] | PropiedadUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutCiudadInput | PropiedadCreateOrConnectWithoutCiudadInput[]
    upsert?: PropiedadUpsertWithWhereUniqueWithoutCiudadInput | PropiedadUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: PropiedadCreateManyCiudadInputEnvelope
    set?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    disconnect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    delete?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    update?: PropiedadUpdateWithWhereUniqueWithoutCiudadInput | PropiedadUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: PropiedadUpdateManyWithWhereWithoutCiudadInput | PropiedadUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
  }

  export type CiudadCreateNestedOneWithoutServiciosInput = {
    create?: XOR<CiudadCreateWithoutServiciosInput, CiudadUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutServiciosInput
    connect?: CiudadWhereUniqueInput
  }

  export type ServicioImageCreateNestedManyWithoutServicioInput = {
    create?: XOR<ServicioImageCreateWithoutServicioInput, ServicioImageUncheckedCreateWithoutServicioInput> | ServicioImageCreateWithoutServicioInput[] | ServicioImageUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ServicioImageCreateOrConnectWithoutServicioInput | ServicioImageCreateOrConnectWithoutServicioInput[]
    createMany?: ServicioImageCreateManyServicioInputEnvelope
    connect?: ServicioImageWhereUniqueInput | ServicioImageWhereUniqueInput[]
  }

  export type ServicioImageUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<ServicioImageCreateWithoutServicioInput, ServicioImageUncheckedCreateWithoutServicioInput> | ServicioImageCreateWithoutServicioInput[] | ServicioImageUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ServicioImageCreateOrConnectWithoutServicioInput | ServicioImageCreateOrConnectWithoutServicioInput[]
    createMany?: ServicioImageCreateManyServicioInputEnvelope
    connect?: ServicioImageWhereUniqueInput | ServicioImageWhereUniqueInput[]
  }

  export type CiudadUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: XOR<CiudadCreateWithoutServiciosInput, CiudadUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutServiciosInput
    upsert?: CiudadUpsertWithoutServiciosInput
    connect?: CiudadWhereUniqueInput
    update?: XOR<XOR<CiudadUpdateToOneWithWhereWithoutServiciosInput, CiudadUpdateWithoutServiciosInput>, CiudadUncheckedUpdateWithoutServiciosInput>
  }

  export type ServicioImageUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ServicioImageCreateWithoutServicioInput, ServicioImageUncheckedCreateWithoutServicioInput> | ServicioImageCreateWithoutServicioInput[] | ServicioImageUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ServicioImageCreateOrConnectWithoutServicioInput | ServicioImageCreateOrConnectWithoutServicioInput[]
    upsert?: ServicioImageUpsertWithWhereUniqueWithoutServicioInput | ServicioImageUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ServicioImageCreateManyServicioInputEnvelope
    set?: ServicioImageWhereUniqueInput | ServicioImageWhereUniqueInput[]
    disconnect?: ServicioImageWhereUniqueInput | ServicioImageWhereUniqueInput[]
    delete?: ServicioImageWhereUniqueInput | ServicioImageWhereUniqueInput[]
    connect?: ServicioImageWhereUniqueInput | ServicioImageWhereUniqueInput[]
    update?: ServicioImageUpdateWithWhereUniqueWithoutServicioInput | ServicioImageUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ServicioImageUpdateManyWithWhereWithoutServicioInput | ServicioImageUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ServicioImageScalarWhereInput | ServicioImageScalarWhereInput[]
  }

  export type ServicioImageUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ServicioImageCreateWithoutServicioInput, ServicioImageUncheckedCreateWithoutServicioInput> | ServicioImageCreateWithoutServicioInput[] | ServicioImageUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ServicioImageCreateOrConnectWithoutServicioInput | ServicioImageCreateOrConnectWithoutServicioInput[]
    upsert?: ServicioImageUpsertWithWhereUniqueWithoutServicioInput | ServicioImageUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ServicioImageCreateManyServicioInputEnvelope
    set?: ServicioImageWhereUniqueInput | ServicioImageWhereUniqueInput[]
    disconnect?: ServicioImageWhereUniqueInput | ServicioImageWhereUniqueInput[]
    delete?: ServicioImageWhereUniqueInput | ServicioImageWhereUniqueInput[]
    connect?: ServicioImageWhereUniqueInput | ServicioImageWhereUniqueInput[]
    update?: ServicioImageUpdateWithWhereUniqueWithoutServicioInput | ServicioImageUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ServicioImageUpdateManyWithWhereWithoutServicioInput | ServicioImageUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ServicioImageScalarWhereInput | ServicioImageScalarWhereInput[]
  }

  export type ServicioCreateNestedOneWithoutImagesInput = {
    create?: XOR<ServicioCreateWithoutImagesInput, ServicioUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutImagesInput
    connect?: ServicioWhereUniqueInput
  }

  export type ServicioUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ServicioCreateWithoutImagesInput, ServicioUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutImagesInput
    upsert?: ServicioUpsertWithoutImagesInput
    connect?: ServicioWhereUniqueInput
    update?: XOR<XOR<ServicioUpdateToOneWithWhereWithoutImagesInput, ServicioUpdateWithoutImagesInput>, ServicioUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PropiedadCreateNestedManyWithoutUserInput = {
    create?: XOR<PropiedadCreateWithoutUserInput, PropiedadUncheckedCreateWithoutUserInput> | PropiedadCreateWithoutUserInput[] | PropiedadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutUserInput | PropiedadCreateOrConnectWithoutUserInput[]
    createMany?: PropiedadCreateManyUserInputEnvelope
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PropiedadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PropiedadCreateWithoutUserInput, PropiedadUncheckedCreateWithoutUserInput> | PropiedadCreateWithoutUserInput[] | PropiedadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutUserInput | PropiedadCreateOrConnectWithoutUserInput[]
    createMany?: PropiedadCreateManyUserInputEnvelope
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PropiedadUpdateManyWithoutUserNestedInput = {
    create?: XOR<PropiedadCreateWithoutUserInput, PropiedadUncheckedCreateWithoutUserInput> | PropiedadCreateWithoutUserInput[] | PropiedadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutUserInput | PropiedadCreateOrConnectWithoutUserInput[]
    upsert?: PropiedadUpsertWithWhereUniqueWithoutUserInput | PropiedadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PropiedadCreateManyUserInputEnvelope
    set?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    disconnect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    delete?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    update?: PropiedadUpdateWithWhereUniqueWithoutUserInput | PropiedadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PropiedadUpdateManyWithWhereWithoutUserInput | PropiedadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUserInput | FavoritoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUserInput | FavoritoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUserInput | FavoritoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PropiedadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PropiedadCreateWithoutUserInput, PropiedadUncheckedCreateWithoutUserInput> | PropiedadCreateWithoutUserInput[] | PropiedadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropiedadCreateOrConnectWithoutUserInput | PropiedadCreateOrConnectWithoutUserInput[]
    upsert?: PropiedadUpsertWithWhereUniqueWithoutUserInput | PropiedadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PropiedadCreateManyUserInputEnvelope
    set?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    disconnect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    delete?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    connect?: PropiedadWhereUniqueInput | PropiedadWhereUniqueInput[]
    update?: PropiedadUpdateWithWhereUniqueWithoutUserInput | PropiedadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PropiedadUpdateManyWithWhereWithoutUserInput | PropiedadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput> | FavoritoCreateWithoutUserInput[] | FavoritoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUserInput | FavoritoCreateOrConnectWithoutUserInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUserInput | FavoritoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoritoCreateManyUserInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUserInput | FavoritoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUserInput | FavoritoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PropiedadCreateWithoutCategoriaInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    tipoPropiedad?: TipoPropiedadCreateNestedOneWithoutPropiedadesInput
    ciudad: CiudadCreateNestedOneWithoutPropiedadesInput
    amenities?: AmenitiesCreateNestedManyWithoutPropiedadesInput
    images?: PropiedadImageCreateNestedManyWithoutPropiedadInput
    User?: UserCreateNestedOneWithoutPropiedadesInput
  }

  export type PropiedadUncheckedCreateWithoutCategoriaInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    tipoPropiedadId: string
    ciudadId: string
    userId?: string | null
    amenities?: AmenitiesUncheckedCreateNestedManyWithoutPropiedadesInput
    images?: PropiedadImageUncheckedCreateNestedManyWithoutPropiedadInput
  }

  export type PropiedadCreateOrConnectWithoutCategoriaInput = {
    where: PropiedadWhereUniqueInput
    create: XOR<PropiedadCreateWithoutCategoriaInput, PropiedadUncheckedCreateWithoutCategoriaInput>
  }

  export type PropiedadCreateManyCategoriaInputEnvelope = {
    data: PropiedadCreateManyCategoriaInput | PropiedadCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type PropiedadUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: PropiedadWhereUniqueInput
    update: XOR<PropiedadUpdateWithoutCategoriaInput, PropiedadUncheckedUpdateWithoutCategoriaInput>
    create: XOR<PropiedadCreateWithoutCategoriaInput, PropiedadUncheckedCreateWithoutCategoriaInput>
  }

  export type PropiedadUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: PropiedadWhereUniqueInput
    data: XOR<PropiedadUpdateWithoutCategoriaInput, PropiedadUncheckedUpdateWithoutCategoriaInput>
  }

  export type PropiedadUpdateManyWithWhereWithoutCategoriaInput = {
    where: PropiedadScalarWhereInput
    data: XOR<PropiedadUpdateManyMutationInput, PropiedadUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type PropiedadScalarWhereInput = {
    AND?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
    OR?: PropiedadScalarWhereInput[]
    NOT?: PropiedadScalarWhereInput | PropiedadScalarWhereInput[]
    id?: StringFilter<"Propiedad"> | string
    title?: StringFilter<"Propiedad"> | string
    slug?: StringFilter<"Propiedad"> | string
    description?: StringNullableFilter<"Propiedad"> | string | null
    apto?: StringNullableFilter<"Propiedad"> | string | null
    precio?: FloatFilter<"Propiedad"> | number
    metros?: FloatFilter<"Propiedad"> | number
    altura?: FloatFilter<"Propiedad"> | number
    address?: StringNullableFilter<"Propiedad"> | string | null
    geoLink?: StringFilter<"Propiedad"> | string
    esPrincipal?: BoolFilter<"Propiedad"> | boolean
    createdAt?: DateTimeFilter<"Propiedad"> | Date | string
    updatedAt?: DateTimeFilter<"Propiedad"> | Date | string
    rentaVenta?: StringNullableFilter<"Propiedad"> | string | null
    temperatura?: StringNullableFilter<"Propiedad"> | string | null
    categoriaId?: StringFilter<"Propiedad"> | string
    tipoPropiedadId?: StringFilter<"Propiedad"> | string
    ciudadId?: StringFilter<"Propiedad"> | string
    userId?: StringNullableFilter<"Propiedad"> | string | null
  }

  export type PropiedadCreateWithoutAmenitiesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoria?: CategoriaCreateNestedOneWithoutPropiedadInput
    tipoPropiedad?: TipoPropiedadCreateNestedOneWithoutPropiedadesInput
    ciudad: CiudadCreateNestedOneWithoutPropiedadesInput
    images?: PropiedadImageCreateNestedManyWithoutPropiedadInput
    User?: UserCreateNestedOneWithoutPropiedadesInput
  }

  export type PropiedadUncheckedCreateWithoutAmenitiesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoriaId: string
    tipoPropiedadId: string
    ciudadId: string
    userId?: string | null
    images?: PropiedadImageUncheckedCreateNestedManyWithoutPropiedadInput
  }

  export type PropiedadCreateOrConnectWithoutAmenitiesInput = {
    where: PropiedadWhereUniqueInput
    create: XOR<PropiedadCreateWithoutAmenitiesInput, PropiedadUncheckedCreateWithoutAmenitiesInput>
  }

  export type PropiedadUpsertWithWhereUniqueWithoutAmenitiesInput = {
    where: PropiedadWhereUniqueInput
    update: XOR<PropiedadUpdateWithoutAmenitiesInput, PropiedadUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<PropiedadCreateWithoutAmenitiesInput, PropiedadUncheckedCreateWithoutAmenitiesInput>
  }

  export type PropiedadUpdateWithWhereUniqueWithoutAmenitiesInput = {
    where: PropiedadWhereUniqueInput
    data: XOR<PropiedadUpdateWithoutAmenitiesInput, PropiedadUncheckedUpdateWithoutAmenitiesInput>
  }

  export type PropiedadUpdateManyWithWhereWithoutAmenitiesInput = {
    where: PropiedadScalarWhereInput
    data: XOR<PropiedadUpdateManyMutationInput, PropiedadUncheckedUpdateManyWithoutAmenitiesInput>
  }

  export type PropiedadCreateWithoutTipoPropiedadInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoria?: CategoriaCreateNestedOneWithoutPropiedadInput
    ciudad: CiudadCreateNestedOneWithoutPropiedadesInput
    amenities?: AmenitiesCreateNestedManyWithoutPropiedadesInput
    images?: PropiedadImageCreateNestedManyWithoutPropiedadInput
    User?: UserCreateNestedOneWithoutPropiedadesInput
  }

  export type PropiedadUncheckedCreateWithoutTipoPropiedadInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoriaId: string
    ciudadId: string
    userId?: string | null
    amenities?: AmenitiesUncheckedCreateNestedManyWithoutPropiedadesInput
    images?: PropiedadImageUncheckedCreateNestedManyWithoutPropiedadInput
  }

  export type PropiedadCreateOrConnectWithoutTipoPropiedadInput = {
    where: PropiedadWhereUniqueInput
    create: XOR<PropiedadCreateWithoutTipoPropiedadInput, PropiedadUncheckedCreateWithoutTipoPropiedadInput>
  }

  export type PropiedadCreateManyTipoPropiedadInputEnvelope = {
    data: PropiedadCreateManyTipoPropiedadInput | PropiedadCreateManyTipoPropiedadInput[]
    skipDuplicates?: boolean
  }

  export type PropiedadUpsertWithWhereUniqueWithoutTipoPropiedadInput = {
    where: PropiedadWhereUniqueInput
    update: XOR<PropiedadUpdateWithoutTipoPropiedadInput, PropiedadUncheckedUpdateWithoutTipoPropiedadInput>
    create: XOR<PropiedadCreateWithoutTipoPropiedadInput, PropiedadUncheckedCreateWithoutTipoPropiedadInput>
  }

  export type PropiedadUpdateWithWhereUniqueWithoutTipoPropiedadInput = {
    where: PropiedadWhereUniqueInput
    data: XOR<PropiedadUpdateWithoutTipoPropiedadInput, PropiedadUncheckedUpdateWithoutTipoPropiedadInput>
  }

  export type PropiedadUpdateManyWithWhereWithoutTipoPropiedadInput = {
    where: PropiedadScalarWhereInput
    data: XOR<PropiedadUpdateManyMutationInput, PropiedadUncheckedUpdateManyWithoutTipoPropiedadInput>
  }

  export type CategoriaCreateWithoutPropiedadInput = {
    id?: string
    name: string
    tipo: number
    estado?: boolean
  }

  export type CategoriaUncheckedCreateWithoutPropiedadInput = {
    id?: string
    name: string
    tipo: number
    estado?: boolean
  }

  export type CategoriaCreateOrConnectWithoutPropiedadInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutPropiedadInput, CategoriaUncheckedCreateWithoutPropiedadInput>
  }

  export type TipoPropiedadCreateWithoutPropiedadesInput = {
    id?: string
    name: string
    estado?: boolean
  }

  export type TipoPropiedadUncheckedCreateWithoutPropiedadesInput = {
    id?: string
    name: string
    estado?: boolean
  }

  export type TipoPropiedadCreateOrConnectWithoutPropiedadesInput = {
    where: TipoPropiedadWhereUniqueInput
    create: XOR<TipoPropiedadCreateWithoutPropiedadesInput, TipoPropiedadUncheckedCreateWithoutPropiedadesInput>
  }

  export type CiudadCreateWithoutPropiedadesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    url?: string | null
    servicios?: ServicioCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUncheckedCreateWithoutPropiedadesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    url?: string | null
    servicios?: ServicioUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type CiudadCreateOrConnectWithoutPropiedadesInput = {
    where: CiudadWhereUniqueInput
    create: XOR<CiudadCreateWithoutPropiedadesInput, CiudadUncheckedCreateWithoutPropiedadesInput>
  }

  export type AmenitiesCreateWithoutPropiedadesInput = {
    id?: string
    name: string
    estado?: boolean
  }

  export type AmenitiesUncheckedCreateWithoutPropiedadesInput = {
    id?: string
    name: string
    estado?: boolean
  }

  export type AmenitiesCreateOrConnectWithoutPropiedadesInput = {
    where: AmenitiesWhereUniqueInput
    create: XOR<AmenitiesCreateWithoutPropiedadesInput, AmenitiesUncheckedCreateWithoutPropiedadesInput>
  }

  export type PropiedadImageCreateWithoutPropiedadInput = {
    url: string
  }

  export type PropiedadImageUncheckedCreateWithoutPropiedadInput = {
    id?: number
    url: string
  }

  export type PropiedadImageCreateOrConnectWithoutPropiedadInput = {
    where: PropiedadImageWhereUniqueInput
    create: XOR<PropiedadImageCreateWithoutPropiedadInput, PropiedadImageUncheckedCreateWithoutPropiedadInput>
  }

  export type PropiedadImageCreateManyPropiedadInputEnvelope = {
    data: PropiedadImageCreateManyPropiedadInput | PropiedadImageCreateManyPropiedadInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPropiedadesInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPropiedadesInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPropiedadesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropiedadesInput, UserUncheckedCreateWithoutPropiedadesInput>
  }

  export type CategoriaUpsertWithoutPropiedadInput = {
    update: XOR<CategoriaUpdateWithoutPropiedadInput, CategoriaUncheckedUpdateWithoutPropiedadInput>
    create: XOR<CategoriaCreateWithoutPropiedadInput, CategoriaUncheckedCreateWithoutPropiedadInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutPropiedadInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutPropiedadInput, CategoriaUncheckedUpdateWithoutPropiedadInput>
  }

  export type CategoriaUpdateWithoutPropiedadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tipo?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriaUncheckedUpdateWithoutPropiedadInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tipo?: IntFieldUpdateOperationsInput | number
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoPropiedadUpsertWithoutPropiedadesInput = {
    update: XOR<TipoPropiedadUpdateWithoutPropiedadesInput, TipoPropiedadUncheckedUpdateWithoutPropiedadesInput>
    create: XOR<TipoPropiedadCreateWithoutPropiedadesInput, TipoPropiedadUncheckedCreateWithoutPropiedadesInput>
    where?: TipoPropiedadWhereInput
  }

  export type TipoPropiedadUpdateToOneWithWhereWithoutPropiedadesInput = {
    where?: TipoPropiedadWhereInput
    data: XOR<TipoPropiedadUpdateWithoutPropiedadesInput, TipoPropiedadUncheckedUpdateWithoutPropiedadesInput>
  }

  export type TipoPropiedadUpdateWithoutPropiedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoPropiedadUncheckedUpdateWithoutPropiedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CiudadUpsertWithoutPropiedadesInput = {
    update: XOR<CiudadUpdateWithoutPropiedadesInput, CiudadUncheckedUpdateWithoutPropiedadesInput>
    create: XOR<CiudadCreateWithoutPropiedadesInput, CiudadUncheckedCreateWithoutPropiedadesInput>
    where?: CiudadWhereInput
  }

  export type CiudadUpdateToOneWithWhereWithoutPropiedadesInput = {
    where?: CiudadWhereInput
    data: XOR<CiudadUpdateWithoutPropiedadesInput, CiudadUncheckedUpdateWithoutPropiedadesInput>
  }

  export type CiudadUpdateWithoutPropiedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    servicios?: ServicioUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadUncheckedUpdateWithoutPropiedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    servicios?: ServicioUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type AmenitiesUpsertWithWhereUniqueWithoutPropiedadesInput = {
    where: AmenitiesWhereUniqueInput
    update: XOR<AmenitiesUpdateWithoutPropiedadesInput, AmenitiesUncheckedUpdateWithoutPropiedadesInput>
    create: XOR<AmenitiesCreateWithoutPropiedadesInput, AmenitiesUncheckedCreateWithoutPropiedadesInput>
  }

  export type AmenitiesUpdateWithWhereUniqueWithoutPropiedadesInput = {
    where: AmenitiesWhereUniqueInput
    data: XOR<AmenitiesUpdateWithoutPropiedadesInput, AmenitiesUncheckedUpdateWithoutPropiedadesInput>
  }

  export type AmenitiesUpdateManyWithWhereWithoutPropiedadesInput = {
    where: AmenitiesScalarWhereInput
    data: XOR<AmenitiesUpdateManyMutationInput, AmenitiesUncheckedUpdateManyWithoutPropiedadesInput>
  }

  export type AmenitiesScalarWhereInput = {
    AND?: AmenitiesScalarWhereInput | AmenitiesScalarWhereInput[]
    OR?: AmenitiesScalarWhereInput[]
    NOT?: AmenitiesScalarWhereInput | AmenitiesScalarWhereInput[]
    id?: StringFilter<"Amenities"> | string
    name?: StringFilter<"Amenities"> | string
    estado?: BoolFilter<"Amenities"> | boolean
  }

  export type PropiedadImageUpsertWithWhereUniqueWithoutPropiedadInput = {
    where: PropiedadImageWhereUniqueInput
    update: XOR<PropiedadImageUpdateWithoutPropiedadInput, PropiedadImageUncheckedUpdateWithoutPropiedadInput>
    create: XOR<PropiedadImageCreateWithoutPropiedadInput, PropiedadImageUncheckedCreateWithoutPropiedadInput>
  }

  export type PropiedadImageUpdateWithWhereUniqueWithoutPropiedadInput = {
    where: PropiedadImageWhereUniqueInput
    data: XOR<PropiedadImageUpdateWithoutPropiedadInput, PropiedadImageUncheckedUpdateWithoutPropiedadInput>
  }

  export type PropiedadImageUpdateManyWithWhereWithoutPropiedadInput = {
    where: PropiedadImageScalarWhereInput
    data: XOR<PropiedadImageUpdateManyMutationInput, PropiedadImageUncheckedUpdateManyWithoutPropiedadInput>
  }

  export type PropiedadImageScalarWhereInput = {
    AND?: PropiedadImageScalarWhereInput | PropiedadImageScalarWhereInput[]
    OR?: PropiedadImageScalarWhereInput[]
    NOT?: PropiedadImageScalarWhereInput | PropiedadImageScalarWhereInput[]
    id?: IntFilter<"PropiedadImage"> | number
    url?: StringFilter<"PropiedadImage"> | string
    propiedadId?: StringFilter<"PropiedadImage"> | string
  }

  export type UserUpsertWithoutPropiedadesInput = {
    update: XOR<UserUpdateWithoutPropiedadesInput, UserUncheckedUpdateWithoutPropiedadesInput>
    create: XOR<UserCreateWithoutPropiedadesInput, UserUncheckedCreateWithoutPropiedadesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropiedadesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropiedadesInput, UserUncheckedUpdateWithoutPropiedadesInput>
  }

  export type UserUpdateWithoutPropiedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPropiedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFavoritosInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    propiedades?: PropiedadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritosInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    propiedades?: PropiedadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
  }

  export type UserUpsertWithoutFavoritosInput = {
    update: XOR<UserUpdateWithoutFavoritosInput, UserUncheckedUpdateWithoutFavoritosInput>
    create: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritosInput, UserUncheckedUpdateWithoutFavoritosInput>
  }

  export type UserUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    propiedades?: PropiedadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    propiedades?: PropiedadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropiedadCreateWithoutImagesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoria?: CategoriaCreateNestedOneWithoutPropiedadInput
    tipoPropiedad?: TipoPropiedadCreateNestedOneWithoutPropiedadesInput
    ciudad: CiudadCreateNestedOneWithoutPropiedadesInput
    amenities?: AmenitiesCreateNestedManyWithoutPropiedadesInput
    User?: UserCreateNestedOneWithoutPropiedadesInput
  }

  export type PropiedadUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoriaId: string
    tipoPropiedadId: string
    ciudadId: string
    userId?: string | null
    amenities?: AmenitiesUncheckedCreateNestedManyWithoutPropiedadesInput
  }

  export type PropiedadCreateOrConnectWithoutImagesInput = {
    where: PropiedadWhereUniqueInput
    create: XOR<PropiedadCreateWithoutImagesInput, PropiedadUncheckedCreateWithoutImagesInput>
  }

  export type PropiedadUpsertWithoutImagesInput = {
    update: XOR<PropiedadUpdateWithoutImagesInput, PropiedadUncheckedUpdateWithoutImagesInput>
    create: XOR<PropiedadCreateWithoutImagesInput, PropiedadUncheckedCreateWithoutImagesInput>
    where?: PropiedadWhereInput
  }

  export type PropiedadUpdateToOneWithWhereWithoutImagesInput = {
    where?: PropiedadWhereInput
    data: XOR<PropiedadUpdateWithoutImagesInput, PropiedadUncheckedUpdateWithoutImagesInput>
  }

  export type PropiedadUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneWithoutPropiedadNestedInput
    tipoPropiedad?: TipoPropiedadUpdateOneWithoutPropiedadesNestedInput
    ciudad?: CiudadUpdateOneRequiredWithoutPropiedadesNestedInput
    amenities?: AmenitiesUpdateManyWithoutPropiedadesNestedInput
    User?: UserUpdateOneWithoutPropiedadesNestedInput
  }

  export type PropiedadUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: AmenitiesUncheckedUpdateManyWithoutPropiedadesNestedInput
  }

  export type ServicioCreateWithoutCiudadInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    images?: ServicioImageCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateWithoutCiudadInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    images?: ServicioImageUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioCreateOrConnectWithoutCiudadInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutCiudadInput, ServicioUncheckedCreateWithoutCiudadInput>
  }

  export type ServicioCreateManyCiudadInputEnvelope = {
    data: ServicioCreateManyCiudadInput | ServicioCreateManyCiudadInput[]
    skipDuplicates?: boolean
  }

  export type PropiedadCreateWithoutCiudadInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoria?: CategoriaCreateNestedOneWithoutPropiedadInput
    tipoPropiedad?: TipoPropiedadCreateNestedOneWithoutPropiedadesInput
    amenities?: AmenitiesCreateNestedManyWithoutPropiedadesInput
    images?: PropiedadImageCreateNestedManyWithoutPropiedadInput
    User?: UserCreateNestedOneWithoutPropiedadesInput
  }

  export type PropiedadUncheckedCreateWithoutCiudadInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoriaId: string
    tipoPropiedadId: string
    userId?: string | null
    amenities?: AmenitiesUncheckedCreateNestedManyWithoutPropiedadesInput
    images?: PropiedadImageUncheckedCreateNestedManyWithoutPropiedadInput
  }

  export type PropiedadCreateOrConnectWithoutCiudadInput = {
    where: PropiedadWhereUniqueInput
    create: XOR<PropiedadCreateWithoutCiudadInput, PropiedadUncheckedCreateWithoutCiudadInput>
  }

  export type PropiedadCreateManyCiudadInputEnvelope = {
    data: PropiedadCreateManyCiudadInput | PropiedadCreateManyCiudadInput[]
    skipDuplicates?: boolean
  }

  export type ServicioUpsertWithWhereUniqueWithoutCiudadInput = {
    where: ServicioWhereUniqueInput
    update: XOR<ServicioUpdateWithoutCiudadInput, ServicioUncheckedUpdateWithoutCiudadInput>
    create: XOR<ServicioCreateWithoutCiudadInput, ServicioUncheckedCreateWithoutCiudadInput>
  }

  export type ServicioUpdateWithWhereUniqueWithoutCiudadInput = {
    where: ServicioWhereUniqueInput
    data: XOR<ServicioUpdateWithoutCiudadInput, ServicioUncheckedUpdateWithoutCiudadInput>
  }

  export type ServicioUpdateManyWithWhereWithoutCiudadInput = {
    where: ServicioScalarWhereInput
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyWithoutCiudadInput>
  }

  export type ServicioScalarWhereInput = {
    AND?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
    OR?: ServicioScalarWhereInput[]
    NOT?: ServicioScalarWhereInput | ServicioScalarWhereInput[]
    id?: StringFilter<"Servicio"> | string
    nombre?: StringFilter<"Servicio"> | string
    descripcion?: StringNullableFilter<"Servicio"> | string | null
    ciudadId?: StringFilter<"Servicio"> | string
  }

  export type PropiedadUpsertWithWhereUniqueWithoutCiudadInput = {
    where: PropiedadWhereUniqueInput
    update: XOR<PropiedadUpdateWithoutCiudadInput, PropiedadUncheckedUpdateWithoutCiudadInput>
    create: XOR<PropiedadCreateWithoutCiudadInput, PropiedadUncheckedCreateWithoutCiudadInput>
  }

  export type PropiedadUpdateWithWhereUniqueWithoutCiudadInput = {
    where: PropiedadWhereUniqueInput
    data: XOR<PropiedadUpdateWithoutCiudadInput, PropiedadUncheckedUpdateWithoutCiudadInput>
  }

  export type PropiedadUpdateManyWithWhereWithoutCiudadInput = {
    where: PropiedadScalarWhereInput
    data: XOR<PropiedadUpdateManyMutationInput, PropiedadUncheckedUpdateManyWithoutCiudadInput>
  }

  export type CiudadCreateWithoutServiciosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    url?: string | null
    propiedades?: PropiedadCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUncheckedCreateWithoutServiciosInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    url?: string | null
    propiedades?: PropiedadUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type CiudadCreateOrConnectWithoutServiciosInput = {
    where: CiudadWhereUniqueInput
    create: XOR<CiudadCreateWithoutServiciosInput, CiudadUncheckedCreateWithoutServiciosInput>
  }

  export type ServicioImageCreateWithoutServicioInput = {
    url: string
  }

  export type ServicioImageUncheckedCreateWithoutServicioInput = {
    id?: number
    url: string
  }

  export type ServicioImageCreateOrConnectWithoutServicioInput = {
    where: ServicioImageWhereUniqueInput
    create: XOR<ServicioImageCreateWithoutServicioInput, ServicioImageUncheckedCreateWithoutServicioInput>
  }

  export type ServicioImageCreateManyServicioInputEnvelope = {
    data: ServicioImageCreateManyServicioInput | ServicioImageCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type CiudadUpsertWithoutServiciosInput = {
    update: XOR<CiudadUpdateWithoutServiciosInput, CiudadUncheckedUpdateWithoutServiciosInput>
    create: XOR<CiudadCreateWithoutServiciosInput, CiudadUncheckedCreateWithoutServiciosInput>
    where?: CiudadWhereInput
  }

  export type CiudadUpdateToOneWithWhereWithoutServiciosInput = {
    where?: CiudadWhereInput
    data: XOR<CiudadUpdateWithoutServiciosInput, CiudadUncheckedUpdateWithoutServiciosInput>
  }

  export type CiudadUpdateWithoutServiciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    propiedades?: PropiedadUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadUncheckedUpdateWithoutServiciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    propiedades?: PropiedadUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type ServicioImageUpsertWithWhereUniqueWithoutServicioInput = {
    where: ServicioImageWhereUniqueInput
    update: XOR<ServicioImageUpdateWithoutServicioInput, ServicioImageUncheckedUpdateWithoutServicioInput>
    create: XOR<ServicioImageCreateWithoutServicioInput, ServicioImageUncheckedCreateWithoutServicioInput>
  }

  export type ServicioImageUpdateWithWhereUniqueWithoutServicioInput = {
    where: ServicioImageWhereUniqueInput
    data: XOR<ServicioImageUpdateWithoutServicioInput, ServicioImageUncheckedUpdateWithoutServicioInput>
  }

  export type ServicioImageUpdateManyWithWhereWithoutServicioInput = {
    where: ServicioImageScalarWhereInput
    data: XOR<ServicioImageUpdateManyMutationInput, ServicioImageUncheckedUpdateManyWithoutServicioInput>
  }

  export type ServicioImageScalarWhereInput = {
    AND?: ServicioImageScalarWhereInput | ServicioImageScalarWhereInput[]
    OR?: ServicioImageScalarWhereInput[]
    NOT?: ServicioImageScalarWhereInput | ServicioImageScalarWhereInput[]
    id?: IntFilter<"ServicioImage"> | number
    url?: StringFilter<"ServicioImage"> | string
    servicioId?: StringFilter<"ServicioImage"> | string
  }

  export type ServicioCreateWithoutImagesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    ciudad: CiudadCreateNestedOneWithoutServiciosInput
  }

  export type ServicioUncheckedCreateWithoutImagesInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    ciudadId: string
  }

  export type ServicioCreateOrConnectWithoutImagesInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutImagesInput, ServicioUncheckedCreateWithoutImagesInput>
  }

  export type ServicioUpsertWithoutImagesInput = {
    update: XOR<ServicioUpdateWithoutImagesInput, ServicioUncheckedUpdateWithoutImagesInput>
    create: XOR<ServicioCreateWithoutImagesInput, ServicioUncheckedCreateWithoutImagesInput>
    where?: ServicioWhereInput
  }

  export type ServicioUpdateToOneWithWhereWithoutImagesInput = {
    where?: ServicioWhereInput
    data: XOR<ServicioUpdateWithoutImagesInput, ServicioUncheckedUpdateWithoutImagesInput>
  }

  export type ServicioUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: CiudadUpdateOneRequiredWithoutServiciosNestedInput
  }

  export type ServicioUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    ciudadId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    propiedades?: PropiedadCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    propiedades?: PropiedadUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    propiedades?: PropiedadUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    propiedades?: PropiedadUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    propiedades?: PropiedadCreateNestedManyWithoutUserInput
    favoritos?: FavoritoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    password?: string | null
    email: string
    role?: string
    isActive?: boolean
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    propiedades?: PropiedadUncheckedCreateNestedManyWithoutUserInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    propiedades?: PropiedadUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    propiedades?: PropiedadUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    contactoId?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    contactoId?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    contactoId?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    contactoId?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PropiedadCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoria?: CategoriaCreateNestedOneWithoutPropiedadInput
    tipoPropiedad?: TipoPropiedadCreateNestedOneWithoutPropiedadesInput
    ciudad: CiudadCreateNestedOneWithoutPropiedadesInput
    amenities?: AmenitiesCreateNestedManyWithoutPropiedadesInput
    images?: PropiedadImageCreateNestedManyWithoutPropiedadInput
  }

  export type PropiedadUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoriaId: string
    tipoPropiedadId: string
    ciudadId: string
    amenities?: AmenitiesUncheckedCreateNestedManyWithoutPropiedadesInput
    images?: PropiedadImageUncheckedCreateNestedManyWithoutPropiedadInput
  }

  export type PropiedadCreateOrConnectWithoutUserInput = {
    where: PropiedadWhereUniqueInput
    create: XOR<PropiedadCreateWithoutUserInput, PropiedadUncheckedCreateWithoutUserInput>
  }

  export type PropiedadCreateManyUserInputEnvelope = {
    data: PropiedadCreateManyUserInput | PropiedadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutUserInput = {
    id?: string
    propiedadId: string
    createdAt?: Date | string
  }

  export type FavoritoUncheckedCreateWithoutUserInput = {
    id?: string
    propiedadId: string
    createdAt?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutUserInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput>
  }

  export type FavoritoCreateManyUserInputEnvelope = {
    data: FavoritoCreateManyUserInput | FavoritoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    contactoId?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    contactoId?: StringNullableFilter<"Session"> | string | null
  }

  export type PropiedadUpsertWithWhereUniqueWithoutUserInput = {
    where: PropiedadWhereUniqueInput
    update: XOR<PropiedadUpdateWithoutUserInput, PropiedadUncheckedUpdateWithoutUserInput>
    create: XOR<PropiedadCreateWithoutUserInput, PropiedadUncheckedCreateWithoutUserInput>
  }

  export type PropiedadUpdateWithWhereUniqueWithoutUserInput = {
    where: PropiedadWhereUniqueInput
    data: XOR<PropiedadUpdateWithoutUserInput, PropiedadUncheckedUpdateWithoutUserInput>
  }

  export type PropiedadUpdateManyWithWhereWithoutUserInput = {
    where: PropiedadScalarWhereInput
    data: XOR<PropiedadUpdateManyMutationInput, PropiedadUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoritoUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutUserInput, FavoritoUncheckedUpdateWithoutUserInput>
    create: XOR<FavoritoCreateWithoutUserInput, FavoritoUncheckedCreateWithoutUserInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutUserInput, FavoritoUncheckedUpdateWithoutUserInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutUserInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: StringFilter<"Favorito"> | string
    userId?: StringFilter<"Favorito"> | string
    propiedadId?: StringFilter<"Favorito"> | string
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
  }

  export type PropiedadCreateManyCategoriaInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    tipoPropiedadId: string
    ciudadId: string
    userId?: string | null
  }

  export type PropiedadUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    tipoPropiedad?: TipoPropiedadUpdateOneWithoutPropiedadesNestedInput
    ciudad?: CiudadUpdateOneRequiredWithoutPropiedadesNestedInput
    amenities?: AmenitiesUpdateManyWithoutPropiedadesNestedInput
    images?: PropiedadImageUpdateManyWithoutPropiedadNestedInput
    User?: UserUpdateOneWithoutPropiedadesNestedInput
  }

  export type PropiedadUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: AmenitiesUncheckedUpdateManyWithoutPropiedadesNestedInput
    images?: PropiedadImageUncheckedUpdateManyWithoutPropiedadNestedInput
  }

  export type PropiedadUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropiedadUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneWithoutPropiedadNestedInput
    tipoPropiedad?: TipoPropiedadUpdateOneWithoutPropiedadesNestedInput
    ciudad?: CiudadUpdateOneRequiredWithoutPropiedadesNestedInput
    images?: PropiedadImageUpdateManyWithoutPropiedadNestedInput
    User?: UserUpdateOneWithoutPropiedadesNestedInput
  }

  export type PropiedadUncheckedUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PropiedadImageUncheckedUpdateManyWithoutPropiedadNestedInput
  }

  export type PropiedadUncheckedUpdateManyWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropiedadCreateManyTipoPropiedadInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoriaId: string
    ciudadId: string
    userId?: string | null
  }

  export type PropiedadUpdateWithoutTipoPropiedadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneWithoutPropiedadNestedInput
    ciudad?: CiudadUpdateOneRequiredWithoutPropiedadesNestedInput
    amenities?: AmenitiesUpdateManyWithoutPropiedadesNestedInput
    images?: PropiedadImageUpdateManyWithoutPropiedadNestedInput
    User?: UserUpdateOneWithoutPropiedadesNestedInput
  }

  export type PropiedadUncheckedUpdateWithoutTipoPropiedadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: AmenitiesUncheckedUpdateManyWithoutPropiedadesNestedInput
    images?: PropiedadImageUncheckedUpdateManyWithoutPropiedadNestedInput
  }

  export type PropiedadUncheckedUpdateManyWithoutTipoPropiedadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropiedadImageCreateManyPropiedadInput = {
    id?: number
    url: string
  }

  export type AmenitiesUpdateWithoutPropiedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AmenitiesUncheckedUpdateWithoutPropiedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AmenitiesUncheckedUpdateManyWithoutPropiedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropiedadImageUpdateWithoutPropiedadInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PropiedadImageUncheckedUpdateWithoutPropiedadInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PropiedadImageUncheckedUpdateManyWithoutPropiedadInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioCreateManyCiudadInput = {
    id?: string
    nombre: string
    descripcion?: string | null
  }

  export type PropiedadCreateManyCiudadInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoriaId: string
    tipoPropiedadId: string
    userId?: string | null
  }

  export type ServicioUpdateWithoutCiudadInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ServicioImageUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateWithoutCiudadInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ServicioImageUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateManyWithoutCiudadInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropiedadUpdateWithoutCiudadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneWithoutPropiedadNestedInput
    tipoPropiedad?: TipoPropiedadUpdateOneWithoutPropiedadesNestedInput
    amenities?: AmenitiesUpdateManyWithoutPropiedadesNestedInput
    images?: PropiedadImageUpdateManyWithoutPropiedadNestedInput
    User?: UserUpdateOneWithoutPropiedadesNestedInput
  }

  export type PropiedadUncheckedUpdateWithoutCiudadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amenities?: AmenitiesUncheckedUpdateManyWithoutPropiedadesNestedInput
    images?: PropiedadImageUncheckedUpdateManyWithoutPropiedadNestedInput
  }

  export type PropiedadUncheckedUpdateManyWithoutCiudadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicioImageCreateManyServicioInput = {
    id?: number
    url: string
  }

  export type ServicioImageUpdateWithoutServicioInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioImageUncheckedUpdateWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioImageUncheckedUpdateManyWithoutServicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    contactoId?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    contactoId?: string | null
  }

  export type PropiedadCreateManyUserInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    apto?: string | null
    precio?: number
    metros?: number
    altura?: number
    address?: string | null
    geoLink: string
    esPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentaVenta?: string | null
    temperatura?: string | null
    categoriaId: string
    tipoPropiedadId: string
    ciudadId: string
  }

  export type FavoritoCreateManyUserInput = {
    id?: string
    propiedadId: string
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    contactoId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropiedadUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneWithoutPropiedadNestedInput
    tipoPropiedad?: TipoPropiedadUpdateOneWithoutPropiedadesNestedInput
    ciudad?: CiudadUpdateOneRequiredWithoutPropiedadesNestedInput
    amenities?: AmenitiesUpdateManyWithoutPropiedadesNestedInput
    images?: PropiedadImageUpdateManyWithoutPropiedadNestedInput
  }

  export type PropiedadUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
    amenities?: AmenitiesUncheckedUpdateManyWithoutPropiedadesNestedInput
    images?: PropiedadImageUncheckedUpdateManyWithoutPropiedadNestedInput
  }

  export type PropiedadUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    apto?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: FloatFieldUpdateOperationsInput | number
    metros?: FloatFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    geoLink?: StringFieldUpdateOperationsInput | string
    esPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentaVenta?: NullableStringFieldUpdateOperationsInput | string | null
    temperatura?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: StringFieldUpdateOperationsInput | string
    tipoPropiedadId?: StringFieldUpdateOperationsInput | string
    ciudadId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoritoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propiedadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propiedadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propiedadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}