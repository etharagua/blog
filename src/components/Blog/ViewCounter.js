"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        const incrementView = async () => {
            try {
                let { error } = await supabase.rpc("increment", {
                    slug_text: slug,
                });
                if (error) {
                    console.log(
                        "Error incrementing the view count inside try block:",
                        error
                    );
                }
            } catch (error) {
                console.error(
                    "An error ocurred while incrementing the view count:",
                    error
                );
            }
        };

        if (!noCount) {
            incrementView();
        }
    }, [slug, noCount]);

    useEffect(() => {
        const getViews = async () => {
            try {
                let { data, error } = await supabase
                    .from("views")
                    .select("count")
                    .match({ slug: slug })
                    .single();
                if (error) {
                    console.log(
                        "Error incrementing the view count inside try block:",
                        error
                    );
                }

                // console.log(data);

                setViews(data ? data.count : 0);
            } catch (error) {
                console.error(
                    "An error ocurred while incrementing the view count:",
                    error
                );
            }
        };
        getViews();
    }, [slug]);

    if (showCount) {
        return <div>{views} vistas</div>;
    } else {
        return null;
    }
};

export default ViewCounter;
