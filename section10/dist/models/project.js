export var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
export class Project {
    constructor(id, title, description, people, state) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.state = state;
    }
}
//# sourceMappingURL=project.js.map