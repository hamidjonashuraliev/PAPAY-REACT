import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { VisitOtherPage } from "./VisitOtherPage";
import { VisitMyPage } from "./VisitMyPage";
import "../../../css/my_page.css";

export function MemberPage(props: any) {
    const { verifiedMemberData } = props;
    let member = useRouteMatch();
    console.log(member);

    return (
        <div className="restaurant_page">
            <Switch>
                <Route path={`${member.path}/other`}>
                    <VisitOtherPage verifiedMemberData={verifiedMemberData} />
                </Route>

                <Route path={`${member.path}`}>
                    <VisitMyPage verifiedMemberData={verifiedMemberData} />
                </Route>
            </Switch>
        </div>
    );
}
