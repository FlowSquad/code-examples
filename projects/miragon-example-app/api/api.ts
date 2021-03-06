/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Data to create a new io.miragon.example.base.project
 * @export
 * @interface NewProjectTO
 */
export interface NewProjectTO {
    /**
     * 
     * @type {string}
     * @memberof NewProjectTO
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof NewProjectTO
     */
    address: string;
}
/**
 * Information to a specific io.miragon.example.base.project
 * @export
 * @interface ProjectTO
 */
export interface ProjectTO {
    /**
     * 
     * @type {string}
     * @memberof ProjectTO
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectTO
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectTO
     */
    address: string;
}
/**
 * Data to update an existing io.miragon.example.base.project
 * @export
 * @interface UpdateProjectTO
 */
export interface UpdateProjectTO {
    /**
     * 
     * @type {string}
     * @memberof UpdateProjectTO
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateProjectTO
     */
    address: string;
}

/**
 * ProjectControllerApi - axios parameter creator
 * @export
 */
export const ProjectControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new project
         * @param {NewProjectTO} newProjectTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewProject: async (newProjectTO: NewProjectTO, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'newProjectTO' is not null or undefined
            assertParamExists('createNewProject', 'newProjectTO', newProjectTO)
            const localVarPath = `/api/project`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(newProjectTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete an existing project
         * @param {string} projectId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProject: async (projectId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('deleteProject', 'projectId', projectId)
            const localVarPath = `/api/project/{projectId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get list of all projects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProject: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/project`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an existing project
         * @param {string} projectId 
         * @param {UpdateProjectTO} updateProjectTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProject: async (projectId: string, updateProjectTO: UpdateProjectTO, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('updateProject', 'projectId', projectId)
            // verify required parameter 'updateProjectTO' is not null or undefined
            assertParamExists('updateProject', 'updateProjectTO', updateProjectTO)
            const localVarPath = `/api/project/{projectId}`
                .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateProjectTO, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProjectControllerApi - functional programming interface
 * @export
 */
export const ProjectControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProjectControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a new project
         * @param {NewProjectTO} newProjectTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewProject(newProjectTO: NewProjectTO, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewProject(newProjectTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete an existing project
         * @param {string} projectId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProject(projectId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProject(projectId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get list of all projects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllProject(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProjectTO>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProject(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update an existing project
         * @param {string} projectId 
         * @param {UpdateProjectTO} updateProjectTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProject(projectId: string, updateProjectTO: UpdateProjectTO, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectTO>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProject(projectId, updateProjectTO, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProjectControllerApi - factory interface
 * @export
 */
export const ProjectControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProjectControllerApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a new project
         * @param {NewProjectTO} newProjectTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewProject(newProjectTO: NewProjectTO, options?: any): AxiosPromise<ProjectTO> {
            return localVarFp.createNewProject(newProjectTO, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an existing project
         * @param {string} projectId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProject(projectId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteProject(projectId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get list of all projects
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProject(options?: any): AxiosPromise<Array<ProjectTO>> {
            return localVarFp.getAllProject(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an existing project
         * @param {string} projectId 
         * @param {UpdateProjectTO} updateProjectTO 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProject(projectId: string, updateProjectTO: UpdateProjectTO, options?: any): AxiosPromise<ProjectTO> {
            return localVarFp.updateProject(projectId, updateProjectTO, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProjectControllerApi - object-oriented interface
 * @export
 * @class ProjectControllerApi
 * @extends {BaseAPI}
 */
export class ProjectControllerApi extends BaseAPI {
    /**
     * 
     * @summary Create a new project
     * @param {NewProjectTO} newProjectTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectControllerApi
     */
    public createNewProject(newProjectTO: NewProjectTO, options?: any) {
        return ProjectControllerApiFp(this.configuration).createNewProject(newProjectTO, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete an existing project
     * @param {string} projectId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectControllerApi
     */
    public deleteProject(projectId: string, options?: any) {
        return ProjectControllerApiFp(this.configuration).deleteProject(projectId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get list of all projects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectControllerApi
     */
    public getAllProject(options?: any) {
        return ProjectControllerApiFp(this.configuration).getAllProject(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an existing project
     * @param {string} projectId 
     * @param {UpdateProjectTO} updateProjectTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectControllerApi
     */
    public updateProject(projectId: string, updateProjectTO: UpdateProjectTO, options?: any) {
        return ProjectControllerApiFp(this.configuration).updateProject(projectId, updateProjectTO, options).then((request) => request(this.axios, this.basePath));
    }
}


