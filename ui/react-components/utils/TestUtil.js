import {render} from "@testing-library/react";
import {IntlProvider} from "react-intl";
import React from "react";

export const renderWithReactIntl = component => {
    const messages = {'PLACEHOLDER_APPOINTMENT_CREATE_SEARCH_PATIENT': ''};
    return render(
        <IntlProvider locale="en" messages={messages}>{component}
        </IntlProvider>);
}