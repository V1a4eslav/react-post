Тут GPT чат описал как на его понимание работать с слайсами RTKQ и персист.

--------------------------Установка-----------------------------------------
Перед началом работы нужно установить необходимые пакеты:

    npm install @reduxjs/toolkit 
    react-redux @reduxjs/toolkit@beta
    @reduxjs/toolkit@beta 
    react-query@next

@reduxjs/toolkit - основной пакет Redux Toolkit;
react-redux - библиотека для интеграции React и Redux;
@reduxjs/toolkit@beta - пакет для использования RTK Query 
                        (на момент написания статьи это версия 2.0.0-beta.0);
react-query@next - библиотека для работы с запросами в React 
                   (на основе которой построен RTK Query).

ТУТ БЫ Я ПОСПОРИЛ ТАК КАК НЕ СТОИТ ВСЕ ПРЯМ УСТАНАВЛИВАТЬ.

--------------------------------Установка--------------------------------------------


--------------------------Создание API-----------------------------------------
Создадим API, который будет использоваться для работы с данными.
Для этого нужно импортировать createApi из @reduxjs/toolkit/query/react 
и fetchBaseQuery из @reduxjs/toolkit/query:

    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

Затем определим основную конфигурацию нашего API:

const BASE_URL = 'https://example.com/api';

    const api = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({
            baseUrl: BASE_URL,
            }),
        endpoints: (builder) => ({
            // ...
        }),
    });

В этом примере мы используем createApi для создания API и определяем конфигурацию:

    reducerPath - имя среза, в котором будут храниться данные, полученные через API;
    baseQuery - настройки для запросов;
    endpoints - определение конечных точек (эндпоинтов) нашего API.

--------------------------Создание API-----------------------------------------


--------------------------Создание эндпоинта-----------------------------------------

Теперь создадим эндпоинт, который будет получать список книг:

    export const booksApi = createApi({
        reducerPath: 'booksApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://www.googleapis.com/books/v1',
        }),
        endpoints: (builder) => ({
            getBooks: builder.query({
                query: (searchTerm = '') => `volumes?q=${searchTerm}`,
            }),
        }),
    });

В этом примере мы используем метод builder.query для создания запроса на получение списка книг. 
Внутри этого метода мы определяем query, который формирует URL для запроса на основе переданного searchTerm. Этот searchTerm будет задан при выполнении запроса.

RTK Query обрабатывает состояния:

    isLoading - запрос находится в процессе выполнения;
    isError - при выполнении запроса возникла ошибка;
    isSuccess - запрос выполнен успешно.
    isFetching: флаг, указывающий на то,выполняется ли запрос или идет обновление данных

Для того, чтобы обработать эти состояния,в компоненте, которая использует запросы RTK Query, 
вы можете использовать хуки, которые генерируются автоматически из определения вашего API.

Для каждого конечного пункта вашего API генерируется набор хуков, включая:

    useGet...Query для получения данных.
    useGet...LazyQuery для получения данных по требованию.
    useGet...Mutation для мутации данных.
В названии хуков useGet... заменяется на имя вашего конечного пункта, 
например, если у вас есть конечный пункт с именем getUsers, 
вы можете использовать хук useGetUsersQuery для получения данных.

Каждый хук возвращает объект с тремя свойствами: data, isLoading и error.

    data содержит данные, возвращенные вашим запросом, 
    isLoading указывает, выполняется ли запрос в настоящее время, и 
    error содержит любые ошибки, возникшие при выполнении запроса.

Пример использования хука useGet...Query:

    javascript
    Copy code
    import { useGetUsersQuery } from './api';
    
    function UsersList() {
        const { data, isLoading, error } = useGetUsersQuery();
        
        if (isLoading) {
            return <div>Loading...</div>;
        }
        
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        
        return (
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        );
    }

Также вы можете использовать методы enqueueQuery, invalidateQueries и cancelQuery 
для управления вашими запросами и кэшем данных.

                        enqueueQuery  
- позволяет вам запустить запрос вручную, а не автоматически при загрузке компонента:


    import { useGetUsersQuery } from './api';
    
    function UsersList() {
        const { data, isLoading, error, isFetching } = useGetUsersQuery();
        
        const handleClick = () => {
        enqueueQuery('getUsers');
        };
        
        return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {data && (
                <>
                    <ul>
                        {data.map(user => (
                        <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                    <button disabled={isFetching} onClick={handleClick}>
                        Refresh
                    </button>
                </>
            )}
            </>
        );
    }


                            invalidateQueries
позволяет вам инвалидировать кэш для всех запросов определенного типа:

    import { invalidateQueries } from '@reduxjs/toolkit/query';
    
    function handleLogout() {
        invalidateQueries('getUsers');
    }


                cancelQuery 
позволяет вам отменить запрос:

    import { useGetUsersQuery, cancelQuery } from './api';
    
    function UsersList() {
        const { data, isLoading, error } = useGetUsersQuery();
        
        const handleCancel = () => {
        cancelQuery('getUsers');
    };



-----------------------------Пример работы со слайсом и RTK Query:--------------------------------

    const api = createApi({
        baseQuery,
        endpoints: (builder) => ({
            getPosts: builder.query({
                query: () => '/posts',
        }),
        createPost: builder.mutation({
            query: (data) => ({
                url: '/posts',
                method: 'POST',
                body: data,
                }),
            }),
        }),
    });
    
    export const { useGetPostsQuery, useCreatePostMutation } = api;

Создание слайса Redux, в котором будут храниться данные, полученные из эндпоинтов.

    import { createSlice } from '@reduxjs/toolkit';
    
    export const postsSlice = createSlice({
        name: 'posts',
        initialState: {
            data: [],
            isLoading: false,
            isSuccess: false,
            isError: false,
            errorMessage: '',
        },
        reducers: {
            setPostsData: (state, action) => {
                state.data = action.payload;
            },
            setPostsLoading: (state, action) => {
                state.isLoading = action.payload;
            },
            setPostsSuccess: (state, action) => {
                state.isSuccess = action.payload;
            },
            setPostsError: (state, action) => {
                state.isError = action.payload;
            },
            setPostsErrorMessage: (state, action) => {
                state.errorMessage = action.payload;
            },
        },
    });
    
    export const {
        setPostsData,
        setPostsLoading,
        setPostsSuccess,
        setPostsError,
        setPostsErrorMessage,
    } = postsSlice.actions;
    
    export default postsSlice.reducer;


Таким образом, мы можем использовать RTK Query для управления состоя
нием приложения и избавиться от лишнего кода для работы с сервером. Ниже приведен пример кода, демонстрирующий, как использовать RTK Query вместе со слайсом Redux для управления состоянием приложения и обращения к серверу:

    
    import { createSlice } from '@reduxjs/toolkit';
    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
    
    // Создание API с использованием RTK Query
    export const postsApi = createApi({
        reducerPath: 'postsApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
            endpoints: (builder) => ({
                getPosts: builder.query({
                    query: () => '/posts',
        }),
        createPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post,
                }),
            }),
        }),
    });
    
    // Создание слайса Redux
    const postsSlice = createSlice({
        name: 'posts',
        initialState: {
        posts: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Обработка состояний запроса для getPosts
        builder.addMatcher(postsApi.endpoints.getPosts.matchPending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addMatcher(postsApi.endpoints.getPosts.matchFulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        });
        builder.addMatcher(postsApi.endpoints.getPosts.matchRejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
        // Обработка состояний запроса для createPost
        builder.addMatcher(postsApi.endpoints.createPost.matchPending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addMatcher(postsApi.endpoints.createPost.matchFulfilled, (state, action) => {
            state.isLoading = false;
            state.posts.push(action.payload);
        });
        builder.addMatcher(postsApi.endpoints.createPost.matchRejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            });
        },
    });
    
    // Экспорт экшенов и селекторов из слайса
    export const {} = postsSlice.actions;
    export const selectPosts = (state) => state.posts.posts;
    
    // Экспорт хуков для обращения к API
    export const useGetPostsQuery = () => postsApi.endpoints.getPosts.useQuery();
    export const useCreatePostMutation = () => postsApi.endpoints.createPost.useMutation();

export const { useGetPostsQuery } = postApi;
export const { useCreatePostMutation } = postApi;

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
Тут чат сделал непонятку

Это позволяет нам импортировать и использовать функции useGetPostsQuery, useCreatePostMutation, 
setUser и clearUser в компонентах, где они не были определены. Таким образом, 
мы можем легко интегрировать RTK Query в различные части приложения,
не дублируя код и не создавая конфликтов в сторе.

Мы используем RTK Query для создания API клиента и далее экспортируем хуки для работы с этим API клиентом.
Затем, внутри слайса, мы можем использовать любые из экспортированных хуков для обращения к соответствующим эндпоинтам 
и получения данных, либо для создания мутаций и отправки данных на сервер.
ExtraReducers в слайсах нужны для того, чтобы мы могли обрабатывать результаты выполнения мутаций 
и запросов, которые мы вызываем через RTK Query. Например, 
мы можем сохранять полученные данные в состояние нашего слайса после успешного выполнения запроса,
обновлять состояние при старте и завершении запроса или мутации, обрабатывать ошибки и т.д.
Таким образом, мы не обращаемся к функции внутри эндпоинта напрямую внутри слайса.
Вместо этого, мы используем хуки RTK Query, которые автоматически обрабатывают вызовы API, а затем обрабатываем результаты внутри extraReducers.




