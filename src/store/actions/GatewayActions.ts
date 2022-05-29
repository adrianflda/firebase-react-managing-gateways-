import IGateway from '../../models/IGateway';
import {
    CLEAR_GATEWAYS,
    GET_GATEWAYS_REQUESTED,
    GET_GATEWAY_REQUESTED,
    TOGGLE_GATEWAY_DELETE,
    UPSERT_GATEWAY_REQUESTED,
} from '../constants';

export const getGateways = () => ({
    type: GET_GATEWAYS_REQUESTED
});

export const getGateway = (payload: string) => ({
    type: GET_GATEWAY_REQUESTED,
    payload
});

// legacy actions
export const addGateway = (payload: IGateway) => ({
    type: UPSERT_GATEWAY_REQUESTED,
    payload
});

export const updateGateway = (payload: IGateway) => ({
    type: UPSERT_GATEWAY_REQUESTED,
    payload
});

export const clearGateways = () => ({
    type: CLEAR_GATEWAYS
});

export const toggleGatewayDelete = (serial: any) => ({
    type: TOGGLE_GATEWAY_DELETE,
    serial
});

export const updateDevice = (uuid: number) => ({

});
