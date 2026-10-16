import {Route, Routes} from "react-router-dom";
import {movies} from "@/common/routesconfig/routesconfig.ts";
import s from './routing.module.css'
import {NotFound} from "@/common/components/NotFound/NotFound.tsx";

export const Rouring = () => (
    <div className={s.routes}>
        <Routes>
        {movies.map((movie) => {
            const { Component } = movie
            return (
                <Route
                    key={movie.path}
                    path={movie.path}
                    element={<Component />}
                />
            )})}
            <Route path="*" element={<NotFound />} />
    </Routes>
     </div>
)

