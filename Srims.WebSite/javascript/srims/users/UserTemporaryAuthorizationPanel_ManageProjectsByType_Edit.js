
if (!Srims.users) 
    Ext.namespace('Srims.users');

Srims.users.UserTemporaryAuthorizationPanel_ManageProjectsByType_Edit = function(){
    var tree = new Ext.tree.TreePanel({
        id: "tree",
        width: 475,
        height: 460,
        autoScroll: true,
        checkModel: 'cascade',
        onlyLeafCheckable: false,
        animate: true,
        loader: new Ext.tree.TreeLoader({
            dataUrl: Srims.service.users.UserService + '/GetDataForTreeUserTemporaryAuthorization',
            baseAttrs: {
                uiProvider: Ext.tree.TreeCheckNodeUI
            }
        }),
        root: new Ext.tree.AsyncTreeNode({
            id: '0',
            text: '项目类型-编辑权限'
        })
    })
    tree.expandAll();
    Srims.users.UserTemporaryAuthorizationPanel_ManageProjectsByType_Edit.superclass.constructor.call(this, {
        frame: true,
        labelWidth: 150,
        items: tree
    })
    this.buildParams = function(params){
        params.typeID_hasPermissionEdit = '';
        
        var rankNodes = tree.root.childNodes;
        params.allHorizontalProject_PermissionEdit = rankNodes[0].attributes.checked;
        params.allVerticalProject_PermissionEdit = rankNodes[1].attributes.checked;
        
        if (rankNodes.length < 3) 
            return;
        for (i = 2; i < rankNodes.length; i++) {
            var typeNodes = rankNodes[i].childNodes;
            if (typeNodes == null) 
                continue;
            for (j = 0; j < typeNodes.length; j++) {
                if (typeNodes[j].attributes.checked) 
                    params.typeID_hasPermissionEdit += typeNodes[j].id + ',';
            }
        }
    }
}
Ext.extend(Srims.users.UserTemporaryAuthorizationPanel_ManageProjectsByType_Edit, Ext.form.FormPanel);
