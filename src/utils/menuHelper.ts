const rolePermissions = [
    {
        name: "myRequests",
        parent: "request",
        roles: ["Employee", "SuperAdmin"]
    },
    {
        name: "managerRequests",
        parent: "request",
        roles: ["LineManager", "SuperAdmin"]
    },
    {
        name: "departmentRequests",
        parent: "request",
        roles: ["ITAdmin", "HrAdmin", "OfficeAdmin", "SuperAdmin"]
    },
    {
        name: "Policies",
        parent: "policy",
        roles: ["SuperAdmin"]
    },
    {
        name: "uploadLunchMenu",
        parent: "lunch",
        roles: ["OfficeAdmin", "SuperAdmin"]
    },
    {
        name: "pollReport",
        parent: "lunch",
        roles: ["OfficeAdmin", "SuperAdmin"]
    },
    {
        name: "orderSummary",
        parent: "lunch",
        roles: ["Hr", "HrAdmin", "SuperAdmin"]
    },
    {
        name: "lunchOrder",
        parent: "lunch",
        roles: ["Employee", "SuperAdmin"]
    },
    {
        name: "lunchOrderBulk",
        parent: "lunch",
        roles: ["OfficeAdmin", "SuperAdmin"]
    },
    {
        name: "lunchReport",
        parent: "lunch",
        roles: ["Employee", "SuperAdmin"]
    },
    {
        name: "myLeave",
        parent: "leave",
        roles: ["Employee", "SuperAdmin"]
    },
    {
        name: "leaveApprovalRequest",
        parent: "leave",
        roles: ["LineManager", "SuperAdmin"]
    },
    {
        name: "leaveCountSummaryReportRequest",
        parent: "leave",
        roles: ["Hr", "HrAdmin", "SuperAdmin"]
    },
    {
        name: "leaveApprovalSummaryReportRequest",
        parent: "leave",
        roles: ["Hr", "HrAdmin", "SuperAdmin"]
    },
    {
        name: "leaveReport",
        parent: "leave",
        roles: ["SuperAdmin"]
    }
];

export const isMenuItemAuthorized = (name: string, userRoles: string[]): boolean => {
    let permission = rolePermissions.find(x => x.name == name);
    if (permission && permission.roles.some(x => userRoles.includes(x))) {
        return true;
    }
    return false;
};

export const isMenuAuthorized = (name: string, userRoles: string[]): boolean => {
    let permissions = rolePermissions.filter(x => x.parent == name);
    let isAuthorized = false;
    permissions.forEach(permission => {
        if (permission && permission.roles.some(x => userRoles.includes(x))) {
            isAuthorized = true;
        }
    });
    return isAuthorized;
};

export const getAllowedRoles = (name: string): string[] => {
    let permission = rolePermissions.find(x => x.name == name);
    if (permission) return permission.roles;
    return [];
};